import dotenv from 'dotenv';
dotenv.config();

const config: {[indexer: string]: string} = {
  apiKey: process.env.REACT_APP_API_KEY!,
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL!,
  apiSongUrl: process.env.REACT_APP_API_SONG_URL!,
  apiLikeUrl: process.env.REACT_APP_API_LIKE_URL!
};
config.apiLikeQueryUrl = config.apiBaseUrl + config.apiLikeUrl + '?apikey=' + encodeURIComponent(config.apiKey);

export default config;