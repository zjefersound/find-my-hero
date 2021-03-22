import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';

import heroesImg from '../../assets/images/heroes.png';

import {
  Container,
  MainBlock,
  Heroes,
  StartButton,
} from './styles';

import soundtrack from './../../assets/audios/soundtrack-1.mp3';
import { MusicContext } from '../../contexts/MusicContext';

const Home = () => {
  const { playing, setPlaying } = useContext(MusicContext);
  const playMusic = () => {
    let audio = new Audio(soundtrack);
    audio.volume = 0.3;
    audio.loop = true;
    !playing && audio.play() && setPlaying(true);
  }

  useEffect(playMusic, []);
  return (
    <Layout>
      <Container>
        <Heroes src={heroesImg} alt="Heroes" />
        <MainBlock>
          <h1>
            Find your<br />
            <span>Hero!</span>
          </h1>
        </MainBlock>
        <StartButton onClick={playMusic} to="/questions">
          Start
        </StartButton>
      </Container>
    </Layout>
  );
}

export default Home;