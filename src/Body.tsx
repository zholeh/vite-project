import { useState } from "react";
import styles from "./App.module.css";
import "./App.css";
import {
  CssBaseline,
  List,
  ListItem,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import { useQuery } from "@apollo/client";
import { roomFindManyGql } from "./gql";

const categories = ["Todo", "Done", "In progress"];
const done = ["Buy milk", "Buy bread", "Buy eggs"];
const todo = ["Buy car", "Buy house", "Buy phone"];
const inProgress = ["Buy car", "Buy house", "Buy phone"];

function Task({ task }: { task: string }) {
  const [isRed, setIsRed] = useState(false);

  const { loading, error, data } = useQuery(roomFindManyGql);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ListItem>
      <p
        className={isRed ? styles.colorRed : ""}
        onClick={() => {
          setIsRed(!isRed);
        }}
      >
        {task}
        {JSON.stringify(data, null, 2)}
      </p>
    </ListItem>
  );
}

function TaskList({ category }: { category: string }) {
  const tasks =
    category === "todo" ? todo : category === "done" ? done : inProgress;

  return (
    <List>
      {tasks.map((task) => {
        return <Task task={task} key={task} />;
      })}
    </List>
  );
}

function Category({ category }: { category: string }) {
  const classes = `${styles.category} appBorder`;
  return (
    <div className={classes}>
      <Typography variant="h1" gutterBottom>
        {category}
      </Typography>
      <TaskList category={category} />
    </div>
  );
}

function Body({ theme }: { theme?: Partial<Theme> }) {
  if (theme) {
    return (
      <div className="body">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {categories.map((category) => {
            return <Category category={category} key={category} />;
          })}
        </ThemeProvider>
      </div>
    );
  }
  return (
    <div className="body">
      {categories.map((category) => {
        return <Category category={category} key={category} />;
      })}
    </div>
  );
}

export default Body;
