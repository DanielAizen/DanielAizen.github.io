import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <Box sx={{ height: 50, backgroundColor: "primary.dark" }}>
      <AppBar position="static" sx={{ height: 40 }}>
        <Toolbar>
           <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, mb: 2 }}
          >
             {/* <MenuIcon />  */}
          </IconButton> 
        </Toolbar>
      </AppBar>
    </Box>
  );
};
