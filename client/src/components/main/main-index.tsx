import React, { useState } from 'react';
import LogoHeader from './logo header/logo-header-index';
import SongList from './song list/song-list-index';
import styles from './main.module.scss';

const Main: React.FC = () => {
  let [isPlaying, setIsPlaying] = useState<boolean>(false);

  function togglePlay () {
    setIsPlaying(isPlaying => !isPlaying);
  }

  return (
    <div className={styles['main-container']}>
      <LogoHeader playing={isPlaying}/>
      <SongList togglePlay={togglePlay}/>
    </div>
  );
};

export default Main;