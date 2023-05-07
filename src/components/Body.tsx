import { useEffect, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { fadeInDown, fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import Typed from "typed.js";
import { CV } from "./../assests/CV";
import { Email } from "./../assests/Email";
import { Github } from "./../assests/Github";
import { Linkedin } from "./../assests/Linkedin";

interface StarProps {
  index: number;
  top: number;
  left: number;
}

interface ImageProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const KeyFrames = {
  fadeDownAnimation: keyframes`${fadeInDown}`,
  fadeUpAnimation: keyframes`${fadeInUp}`,
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
    zIndex: 0;
    height: "80vh";
    `,
  FadeDownDiv: styled.div`
    animation: 2s ${KeyFrames.fadeDownAnimation};
  `,
  FadeUpDiv: styled.div`
    animation: 2s ${KeyFrames.fadeUpAnimation};
  `,
  ButtobContainer: styled.div`
    a,
    a:active,
    a:hover {
      outline: 0;
    }

    .button-container {
      display: inline-block;
      height: 4rem;
      width: 4rem;
      margin: 0 1.75rem;
    }

    .button {
      transition: color 0.5s linear;
      height: 4rem;
      width: 4rem;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      text-decoration: none;
      position: relative;
      z-index: 1;
      border-radius: 25%;
      color: white;
    }

    .icon {
      height: 3.75rem;
      width: 3.75rem;
      opacity: 0.65;
    }

    .icon_title {
      font-size: 1.25rem;

    }

    .button:hover {
      background-color: transparent;
      box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
    }

    .button:active {
      transform: scale(0.9);
    }

    .button-container .icon_title {
      display: none;
    }

    .button-container:hover .icon_title {
      display: initial;
    }

    .button-container:hover .icon {
      display: none;
    }
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
  Name: styled.h1`
    font-size: 4.25rem;
    color: white;
    opacity: 0.65;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    margin: 10px;
    @media only screen and (max-device-width: 820px) {
      font-size: 25px;
    }
  `,
  Titles: styled.span`
    font-size: 2.25rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
    color: white;
    opacity: 0.5;
  `,
};

export const Body = () => {
  const elem = useRef(null);
  const images: ImageProps[] = [
    {
      href: "https://www.linkedin.com/in/daniel-aizenband-8117391b9/",
      icon: <Linkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/DanielAizen",
      icon: <Github />,
      label: "Github",
    },
    {
      href: "mailto:aiz.dani@gmail.com",
      icon: <Email />,
      label: "Email",
    },
    {
      href: "https://drive.google.com/file/d/1OVksmInfVZHrEr73LNHKqjigJ07vBx3_/view?usp=share_link",
      icon: <CV />,
      label: "Open CV",
    },
  ];

  useEffect(() => {
    const options = {
      strings: ["Sofware developer; Full Stack engineer; Gamer;"],
      typeSpeed: 50,
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
          <Box
            sx={{
              mb: "200px",
              width: "60%",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Content.Name>
                  <Animation.FadeDownDiv>
                    Hey! <br /> My name is Daniel Aizenband
                  </Animation.FadeDownDiv>
                </Content.Name>
              </Grid>
              <Grid item>
                <Content.Titles ref={elem} />
              </Grid>
              <Grid container item justifyContent="center" alignItems="center">
                <Animation.ButtobContainer>
                  {images.map((img, i) => (
                    <span className="button-container" key={i}>
                      <a
                        className="button"
                        href={img.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Animation.FadeUpDiv>
                          <div className="icon">{img.icon}</div>
                          <span className="icon_title">{img.label}</span>
                        </Animation.FadeUpDiv>
                      </a>
                    </span>
                  ))}
                </Animation.ButtobContainer>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Animation.Background>
      <Stars />
    </Animation.AnimationContainer>
  );
};
