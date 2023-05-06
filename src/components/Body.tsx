import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";
import Typed from "typed.js";

interface StarProps {
  index: number;
  top: number;
  left: number;
}

const KeyFrames = {
  fadeDownAnimation: keyframes`${fadeInDown}`,
  colorChange: keyframes`
  0% {
      background-color: #000000;
  }
  25% {}
  50% {
      background-color: #ffcc80
      ;
  }
  100% {
      background-color: #000000;
  }
`,
  starFadeOut: keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
 `,
  linearGradient: keyframes`
 0% {
    background-position: 10% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 10% 50%;
  }`,
};

const Animation = {
  AnimationContainer: styled.div`
    position: "relative",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "91vh",
        zIndex: 0
    `,
  FadeDownDiv: styled.div`
    animation: 2s ${KeyFrames.fadeDownAnimation};
  `,
  Background: styled.div`
    position: absolute;
    background: linear-gradient(
      -45deg,
      #3492ca,
      #1565c0,
      #0e4686,
      #6a52b3,
      #330e62
    );
    height: 100%;
    width: 100%;
    background-size: 300% 300%;
    animation: 15s ${KeyFrames.linearGradient} ease infinite;
  `,
  StarContainer: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  `,
  Star: styled.div<StarProps>`
    position: absolute;
    top: ${({ top }) => `${top}%`};
    left: ${({ left }) => `${left}%`};
    width: 4px;
    height: 4px;
    margin: 5px;
    background-color: #000000;
    border-radius: 50%;
    animation: ${KeyFrames.colorChange} 2s infinite;
    animation-name: ${() => {
      const animations = [KeyFrames.colorChange, KeyFrames.starFadeOut];
      return animations[Math.floor(Math.random() * animations.length)];
    }};
    animation-duration: ${() => `${Math.floor(Math.random() * 10 + 5)}s`};
    z-index: 1;
  `,
};

const Stars = () => {
  const starCount = 350;

  // Create an array of Star components with incrementing index values
  const stars = Array(starCount)
    .fill(0)
    .map((_, i) => {
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      return <Animation.Star key={i} index={i} top={top} left={left} />;
    });

  return <Animation.StarContainer>{stars}</Animation.StarContainer>;
};

const Content = {
  Name: styled.h3`
    font-size: 40px;
    color: white;
    opacity: 0.45;
    font-family: "Times New Roman", Times, serif;
    @media only screen and (max-device-width: 820px) {
      font-size: 25px;
    }
  `,
};

export const Body = () => {
  const elem = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Sofware developer; Full Stack engineer; Gamer;"],
      typeSpeed: 150,
      backSpeed: 50,
      startDelay: 1000,
    };
    const typed = new Typed(elem.current, options);

    return () => {
        typed.destroy();
      };
  }, []);
  return (
    <Animation.AnimationContainer>
      <Animation.Background>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ mb: "450px", width: '60%', display: 'grid', textAlign: 'center'}}>
            <Content.Name>
              <Animation.FadeDownDiv>
                Hey! <br/> My name is Daniel Aizenband
              </Animation.FadeDownDiv>
            </Content.Name>
              <span ref={elem}/>
          </Box>
        </Box>
      </Animation.Background>
      <Stars />
    </Animation.AnimationContainer>
  );
};
