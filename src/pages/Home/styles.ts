import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { appearFromLeft, appearFromTop } from '../../styles/Animations';

const mainBlockAnimation = keyframes`
  0% {
    transform: rotate(0) scale(0.5);
    box-shadow: 0 0 0 0 var(--primary);
  }
  60% {
    transform: scale(1);
    box-shadow: -0.6rem 0.6rem 0 0 var(--primary);
    transform: rotate(0);
  }

  100% {
    transform: rotate(-4deg);
  }
`;

const heroesAnimation = keyframes`
  0% {
    transform: scale(0) translateY(12rem);
  }
  80% {
    transform: scale(1.05);
  }

  100% {
  }
`;

const shakeButtonAnimation = keyframes`
  0% {
    transform: scale(0) translateY(12rem);
  }
  25% {
    transform: scale(1.05);
  }


  60% {transform: scale(1.05);}
  62% {transform: scale(1);}
  64% {transform: scale(1.05);}

  66% {transform: scale(1.05);}
  68% {transform: scale(1);}
  70% {transform: scale(1.05);}

  86% {transform: scale(1.05);}
  88% {transform: scale(1);}
  90% {transform: scale(1.05);}
`;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(100%, 64rem);
  padding: 3.2rem;
`;

export const MainBlock = styled.div`
  display: flex;
  padding: 3.2rem 4rem;
  background: var(--neutral-100);
  position: relative;
  margin-top: -4rem;
  box-shadow: -0.6rem 0.6rem 0 0 var(--primary);
  transform: rotate(-4deg);

  animation: ${mainBlockAnimation} 2s;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3.2rem;
    line-height: 4.4rem;
    font-weight: 900;
  
    > span {
      color: var(--primary);
      font-size: 7.2rem;
    }
  }

  @media (min-width: 64rem) {
    margin-top: -7.2rem;

    h1 {
      font-size: 4rem;
      line-height: 5.4rem;
      > span {
        font-size: 8.8rem;
      }
    }
  }
`;

export const Heroes = styled.img`
  width: 95%;
  animation: ${heroesAnimation} 3s;
`;

export const StartButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;
  padding: 0 4.8rem;
  margin-top: -2.4rem;
  z-index: 2;

  color: var(--neutral-100);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4rem;

  background: var(--primary);

  animation: ${shakeButtonAnimation} 6s ;
  &:hover {
    background: var(--primary-dark);
  }
`;
