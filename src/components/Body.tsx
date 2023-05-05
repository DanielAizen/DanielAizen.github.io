import { Box, Grid, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";

const Animation = {
  Background: styled.div`
    background: linear-gradient(-45deg, #3492ca, #1565c0, #0e4686, #6a52b3);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,
};
export const Body = () => {
  return (
    <div>
      <Animation.Background>
        <Box sx={{ height: "100%", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          {"Hey my name is daniel aizenband - To be continued"}
          {/* <Grid container justifyContent="center" alignContent="center">
            
          </Grid> */}
        </Box>
      </Animation.Background>
    </div>
  );
};
