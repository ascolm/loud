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
  return await (apiHelper(() => fetch(config.apiBaseUrl + config.apiSongUrl), 'Api get request to fetch songs failed.'));
};

export const postLike = async (songId: string) => {
  return await (apiHelper(() =>
    fetch(config.apiLikeQueryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'id=' + songId
    }), 'Api post request to like a song failed.'));
};