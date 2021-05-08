import React, { useState, useEffect } from 'react';
import { Song } from 'interfaces/interfaces';
import { getSongs } from 'apiService';
import styles from './song-list.module.scss';

export interface Props {
}

const SongList: React.FC<Props> = (props: Props) => {
  let [songList, setSongList] = useState<Song[]>([]);

  useEffect(() => {
    const asyncSongFetcher = async () => {
      const songList = await getSongs();
      setSongList(songList);
    };

    asyncSongFetcher();
  }, []);

  return (
    <div className={styles['song-list-container']}>
      {songList.length > 0 && songList.map(s => <p>{s.name}</p>)}
    </div>
  );
};

export default SongList;