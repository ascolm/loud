import React, { useState } from 'react';
import LogoHeader from './logo header/logo-header-index';
import SongList from './song list/song-list-index';
import styles from './main.module.scss';
const audioPlayer = new Audio();

const Main: React.FC = () => {
  let [songPlaying, setSongPlaying] = useState<string>('');

  function togglePlay (songId: string, fileUrl: string) {
    audioPlayer.pause();
    if (songId === songPlaying) {
      setSongPlaying('');
    } else {
      setSongPlaying(songId);
      audioPlayer.src = fileUrl;
      audioPlayer.play();
    }
  }

  return (
    <div className={styles['main-container']}>
      <LogoHeader playing={songPlaying ? true : false}/>
      <SongList togglePlay={togglePlay} songPlaying={songPlaying}/>
    </div>
  );
};

export default Main;