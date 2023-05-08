import { Box, Typography, SvgIcon, Grid } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styled from "styled-components";

const Styles = {
  Link: styled.a`
    transition: color 0.5s linear;
    text-decoration: none;
    color: white;
  `,
  Text: styled.span`
    font-family: "Times New Roman", Times, serif;
    color: white;
    font-weight: normal;
    margin-right: 10px;
  `,
};

export const Footer = () => {
  return (
    <Box
      sx={{
        height: 30,
        backgroundColor: "primary.dark",
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: 'end'
      }}
    >
      <Styles.Text>
        Built by: Daniel Aizenband
        <SvgIcon sx={{ fontSize: "small" }}>
          <CopyrightIcon />
        </SvgIcon>
        <Styles.Link href="https://github.com/DanielAizen/DanielAizen.github.io">
          {' '}| Source Code
        </Styles.Link>
      </Styles.Text>
    </Box>
  );
};
