import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ReactIcon from '../media/react-icon.svg';
import ViteIcon from '../media/vite-icon.svg';
import GitHubIcon from '../media/github-icon.svg';



const Footer = () => (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          My Footer
        </Typography>
        <IconButton color="inherit" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={ReactIcon} alt="React" style={{ height: 24 }} />
        </IconButton>
        <IconButton color="inherit" href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={ViteIcon} alt="Vite" style={{ height: 24 }} />
        </IconButton>
        <IconButton color="inherit" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" style={{ height: 24 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
  
  export default Footer;
  
  