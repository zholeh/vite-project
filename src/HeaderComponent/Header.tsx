import { Button, Typography, createTheme } from "@mui/material";
import { HeaderType } from "./HeaderType";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function Header({changeTheme}: HeaderType) {
  return (
    <header>
      <Typography variant="h1" gutterBottom>
        My App
      </Typography>
      <Button variant="contained" color="primary" onClick={() => changeTheme(darkTheme)}> Dark</Button>
      <Button variant="contained" color="primary" onClick={() => changeTheme(lightTheme)}> Light</Button>
    </header>
  );
}

export default Header;
