import React, { createContext, FormEvent, useCallback, useState } from "react";

interface MusicProps {
  playing: boolean;
  setPlaying: (e: boolean) => void;
}

const MusicContext = createContext<MusicProps>({} as MusicProps);

const MusicProvider: React.FC = ({ children }) => {
  const [playing, setPlaying] = useState(false);

  const values = {
    playing,
    setPlaying
  }

  return (
    <MusicContext.Provider value={values}>
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicProvider };