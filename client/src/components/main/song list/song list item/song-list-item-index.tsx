import styles from './song-list-item.module.scss';
import { Song } from 'interfaces/interfaces';

export interface Props {
  song: Song;
}

const SongListItem: React.FC<Props> = ({ song }) => {
  return (
    <div className={styles['song-list-item-container']}>
      <img src={song.cover_image_path} alt='Song cover image' className={styles['song-img']} />
      <div className={styles['song-details']}>
        <p className={styles['song-name']}>{song.name}</p>
        <p className={styles['artist-name']}>{song.artist.name}</p>
      </div>
      <div className={styles['buttons']}>
        <button>like</button>
        <button>play</button>
      </div>
    </div>
  );
};

export default SongListItem;