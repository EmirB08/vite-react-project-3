import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import ReactIcon from '../media/react-icon.svg';
import ViteIcon from '../media/vite-icon.svg';
import GitHubIcon from '../media/github-icon.svg';

const Footer = () => (
    <Container maxWidth="md">
        <AppBar position="static" sx={{ backgroundColor: 'rgb(24, 94, 165)' }}>
        <Toolbar sx={{ minHeight: "45px !important", padding: "0px" }}>
                <Typography 
                    variant="h6" 
                    color="inherit" 
                    component="div" 
                    sx={{ 
                        flexGrow: 1, 
                        fontSize: '0.9rem',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}
                >
                    Created with 
                    <IconButton color="inherit" href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                        <img src={ViteIcon} alt="Vite" style={{ height: 24 }} />
                    </IconButton>
                    +
                    <IconButton color="inherit" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        <img src={ReactIcon} alt="React" style={{ height: 24 }} />
                    </IconButton>
                    by EmirB08
                    <IconButton color="inherit" href="https://github.com/EmirB08" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" style={{ height: 24 }} />
                    </IconButton>
                </Typography>
            </Toolbar>
        </AppBar>
    </Container>
);

export default Footer;

