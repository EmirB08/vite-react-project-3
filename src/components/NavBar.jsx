import { AppBar, Toolbar, Button, Box } from '@mui/material';
import Typography from "@mui/joy/Typography";

const NavBar = () => (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(24, 94, 165)' }}>
        <Toolbar sx={{ minHeight: "45px !important", padding: "0px", margin: "0px" }}>
            <Typography level="h4" color="inherit" component="div">Enhetsregisteret</Typography>
                <Box display="flex" flexGrow={1} justifyContent="flex-end">
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Box>
        </Toolbar>
    </AppBar>
);

export default NavBar;