import { keyframes } from "styled-components";

export const appearFromLeft = keyframes`
  0% {
    opacity: 0;   
    transform: translateX(-8rem);
  }
  100% {
    opacity: 1;   
    transform: translateX(0);
  }
`;

export const appearFromRight = keyframes`
  0% {
    opacity: 0;   
    transform: translateX(8rem);
  }
  100% {
    opacity: 1;   
    transform: translateX(0);
  }
`;

export const appearFromTop = keyframes`
  0% {
    opacity: 0;   
    transform: translateY(-8rem);
  }
  100% {
    opacity: 1;   
    transform: translateY(0);
  }
`;

export const appearFromBottom = keyframes`
  0% {
    opacity: 0;   
    transform: translateX(-8rem);
  }
  100% {
    opacity: 1;   
    transform: translateX(0);
  }
`;

