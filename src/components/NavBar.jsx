import { AppBar, Toolbar, Button, Box } from '@mui/material';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Box display="flex" flexGrow={1} justifyContent="flex-end">
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default NavBar;

  