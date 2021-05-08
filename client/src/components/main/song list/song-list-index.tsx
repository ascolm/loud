import React, { useState } from 'react';
import styles from './song-list.module.scss';

export interface Props {

}

const SongList: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles['song-list-container']}>
    </div>
  );
};

export default SongList;