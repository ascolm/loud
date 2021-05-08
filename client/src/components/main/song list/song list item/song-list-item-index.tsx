import styles from './song-list-item.module.scss';
import { Song } from 'interfaces/interfaces';
import { useState } from 'react';

export interface Props {
  song: Song;
}

const SongListItem: React.FC<Props> = ({ song }) => {
  let [liked, setLiked] = useState<boolean>(false);
  let [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <div className={styles['song-list-item-container']}>
      <img src={song.cover_image_path} alt='Song cover image' className={styles['song-img']} />
      <div className={styles['song-details']}>
        <p className={styles['song-name']}>{song.name}</p>
        <p className={styles['artist-name']}>{song.artist.name}</p>
      </div>
      <div className={styles['buttons']}>
        <button onClick={() => setLiked(liked => !liked)}>
          {liked ? <i className={'fas fa-lg fa-heart ' + styles['liked']}></i> : <i className='far fa-lg fa-heart'></i>}
        </button>
        <button onClick={() => setIsPlaying(playing => !playing)}>
          {isPlaying ? <i className="fas fa-lg fa-pause"></i> : <i className="fas   fa-lg fa-play"></i>}
        </button>
      </div>
      <div className={styles['half-border']}></div>
    </div>
  );
};

export default SongListItem;