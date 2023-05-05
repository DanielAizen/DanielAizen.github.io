import { Box, AppBar, Typography, SvgIcon, Link } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: 40,
        backgroundColor: "primary.dark",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{ height: 30, position: "fixed", bottom: 0 }}
      >
        <Typography align="left">
          Build by: Daniel Aizenband
          <SvgIcon sx={{ fontSize: "small" }}>
            <CopyrightIcon />
          </SvgIcon> 
        </Typography>
        <Typography align="right">
          <Link href="https://github.com/DanielAizen/DanielAizen.github.io">Source Code</Link>
        </Typography>
      </AppBar>
    </Box>
  );
};
