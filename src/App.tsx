import { useState } from "react";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // false -> light mode, true -> dark mode

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header toggleTheme={toggleTheme} />
      <Body theme={isDarkMode ? darkTheme : lightTheme} />
    </ThemeProvider>
  );
}

export default App;
