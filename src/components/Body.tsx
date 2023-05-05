import { Box } from "@mui/material";
import { fadeInDownBig } from "react-animations";
import styled, { keyframes } from "styled-components";
// import { fadeInDownBig } from "react-animations";

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

const fadeInDown = keyframes`${fadeInDownBig}`
const FadeDownDiv = styled.div` animation: 2s ${fadeInDown}`
export const Body = () => {
  return (
    <div>
      <Animation.Background>
        <Box sx={{ height: "100%", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <FadeDownDiv> Hey my name is daniel aizenband - To be continued</FadeDownDiv>
          {/* <Grid container justifyContent="center" alignContent="center">
            
          </Grid> */}
        </Box>
      </Animation.Background>
    </div>
  );
};
