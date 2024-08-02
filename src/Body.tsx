import { useState } from "react";
import styles from "./App.module.css";
import "./App.css";
import {
  createTheme,
  CssBaseline,
  List,
  ListItem,
  ThemeProvider,
  Typography,
} from "@mui/material";

const categories = ["Todo", "Done", "In progress"];
const done = ["Buy milk", "Buy bread", "Buy eggs"];
const todo = ["Buy car", "Buy house", "Buy phone"];
const inProgress = ["Buy car", "Buy house", "Buy phone"];

function Task({ task }: { task: string }) {
  const [isRed, setIsRed] = useState(false);

  return (
    <ListItem>
      <p
        className={isRed ? styles.colorRed : ""}
        onClick={() => {
          setIsRed(!isRed);
        }}
      >
        {task}
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

function Body({ theme }: { theme: any }) {
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

export default Body;
