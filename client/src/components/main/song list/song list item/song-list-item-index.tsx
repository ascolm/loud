import styles from './song-list-item.module.scss';
import { Song } from 'interfaces/interfaces';
import React, { useState } from 'react';
import { postLike } from 'apiService';

export interface Props {
  song: Song;
  togglePlay: (songId: string, fileUrl: string) => void;
  isPlaying: boolean;
}

const SongListItem: React.FC<Props> = ({ song, togglePlay, isPlaying }) => {
  let [liked, setLiked] = useState<boolean>(false);

  async function likeHandler () {
    if (!liked) postLike(song.id);
    setLiked(liked => !liked);
  }

  return (
    <div className={styles['song-list-item-container']}>
      <img src={song.cover_image_path} alt={song.name + ' song cover'} className={styles['song-img']} />
      <div className={styles['song-details']}>
        <p className={styles['song-name']}>{song.name}</p>
        <p className={styles['artist-name']}>{song.artist.name}</p>
      </div>
      <div className={styles['buttons']}>
        <button onClick={likeHandler} aria-label='like'>
          {liked ? <i className={'fas fa-lg fa-heart ' + styles['liked']}></i> : <i className='far fa-lg fa-heart'></i>}
        </button>
        <button onClick={() => togglePlay(song.id, song.music_file_path)} aria-label='play-pause'>
          {isPlaying ? <i className="fas fa-lg fa-pause"></i> : <i className="fas   fa-lg fa-play"></i>}
        </button>
      </div>
      <div className={styles['half-border']}></div>
    </div>
  );
};

export default React.memo(SongListItem);