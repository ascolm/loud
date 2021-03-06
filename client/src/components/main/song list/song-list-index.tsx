import React, { useState, useEffect } from 'react';
import { Song } from 'interfaces/interfaces';
import { getSongs } from 'apiService';
import { CircleSpinner } from 'react-spinners-kit';
import styles from './song-list.module.scss';
import SongListItem from './song list item/song-list-item-index';

export interface Props {
  togglePlay: (songId: string, fileUrl: string) => void;
  songPlaying: string;
}

const SongList: React.FC<Props> = ({ togglePlay, songPlaying }) => {
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
      <h1>Song List</h1>
      {songList.length === 0 ? <div className={styles['loading']}><CircleSpinner color='#17adb3'/></div> :
        songList.map(songItem =>
          <SongListItem
            key={songItem.id}
            song={songItem}
            togglePlay={togglePlay}
            isPlaying={songItem.id === songPlaying}
          />)}
    </div>
  );
};

export default SongList;