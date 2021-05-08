import config from 'config';

const apiHelper = async (fetcher: () => Promise<Response>, errorMsg: string = 'An error ocurred in API request.') => {
  const response = await fetcher();
  if (response.ok) {
    const parsedResponse = await response.json();
    return parsedResponse;
  } else {
    throw new Error(errorMsg);
  }
};

export const getSongs = async () => {
  const response = await fetch(config.apiBaseUrl + config.apiSongUrl);
  if (response.ok) {
    const songList = await response.json();
    return songList;
  } else {
    throw new Error('Song fetch failed');
  }
};
