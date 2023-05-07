import { Box, AppBar, Typography, SvgIcon, Grid } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styled from "styled-components";

const Styles = {
  Link: styled.a`
    transition: color 0.5s linear;
    text-decoration: none;
    color: white;
  `,
};

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
        <Grid container columns={16} spacing={2}>
          <Grid item xs={8}>
            <Typography>
              Build by: Daniel Aizenband
              <SvgIcon sx={{ fontSize: "small" }}>
                <CopyrightIcon />
              </SvgIcon>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ color: "white", textAlign: "end" }}>
              <Styles.Link href="https://github.com/DanielAizen/DanielAizen.github.io">
                Source Code
              </Styles.Link>
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};
