import { Theme, ThemeProvider } from "@mui/material";
import "./App.css";
import Body from "./Body";
import Header from "./HeaderComponent/Header";
import { useState } from "react";
import { lightTheme } from "./HeaderComponent/Header";

function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  }
  return (
    <ThemeProvider theme={theme}>
      <Header changeTheme={changeTheme} />
      <Body />
    
    </ThemeProvider>
    
  );
}

export default App;
