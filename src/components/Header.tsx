import { AppBar, Box, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ height: 50, backgroundColor: "primary.dark" }}>
      <AppBar position="static" sx={{ height: 40 }}>
        <Toolbar>
           {/* <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, mb: 2 }}
          >
              <MenuIcon />
          </IconButton>  */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
