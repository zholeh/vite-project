import { Button, Typography } from "@mui/material";

function Header() {
  return (
    <header>
      <Typography variant="h1" gutterBottom>
        My App
      </Typography>
      <Button variant="contained" color="primary"> Dark</Button>
      <Button variant="contained" color="primary"> Light</Button>
    </header>
  );
}

export default Header;
