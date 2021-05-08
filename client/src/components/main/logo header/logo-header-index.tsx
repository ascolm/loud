import styles from './logo-header.module.scss';

export interface Props {
  playing: boolean;
}

const LogoHeader: React.FC<Props> = ({ playing }) => {
  return (
    <div className={styles['logo-header-container']}>
      <div className={styles['loudly-container']}>
        <div className={styles['pickup']}>
          <div className={styles['L']}>
            <div className={`${styles['L-vertical']} ${playing ? styles['L-playing'] : ''}`}>
              <div className={styles['L-horizontal']}></div>
            </div>
          </div>

          <div className={`${styles['O']} ${playing ? styles['O-playing'] : ''}`}>
            <div className={styles['O-outer']}>
              <div className={styles['line']}></div>
              <div className={styles['O-inner']}></div>
            </div>
          </div>
        </div>

        <p className={styles['udly']}>UDLY</p>

      </div>
    </div>
  );
};

export default LogoHeader;