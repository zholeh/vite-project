import { useState } from "react";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoomList from "./page/room/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/bodyExample",
    element: <Body />,
  },
  {
    path: "/room",
    element: <RoomList />,
  },
]);

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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
