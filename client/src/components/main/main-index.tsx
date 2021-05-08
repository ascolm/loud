import React, { useState } from 'react';
import SongList from './song list/song-list-index';
import styles from './main.module.scss';

export interface Props {

}

const Main: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles['main-container']}>
      <h1>Main is here</h1>
      <SongList/>
    </div>
  );
};

export default Main;