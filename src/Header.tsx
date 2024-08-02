import { Button, Typography } from "@mui/material";

function Header({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <header>
      <Typography variant="h1" gutterBottom>
        My App
      </Typography>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Change theme
      </Button>
    </header>
  );
}

export default Header;
