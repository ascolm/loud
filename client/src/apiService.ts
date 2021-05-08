import config from 'config';

export const getSongs = async () => {
  const response = await fetch(config.apiBaseUrl + config.apiSongUrl);
  if (response.ok) {
    const songList = await response.json();
    return songList;
  } else {
    throw new Error('Song fetch failed');
  }
};
