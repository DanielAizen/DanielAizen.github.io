import { Box, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ height: 30, backgroundColor: "primary.dark" }}>
      
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
    </Box>
  );
};
