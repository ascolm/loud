import dotenv from 'dotenv';
dotenv.config();

const config = {
  apiKey: process.env.REACT_APP_API_KEY!,
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL!,
  apiSongUrl: process.env.REACT_APP_API_SONG_URL!,
  apiLikeUrl: process.env.REACT_APP_API_LIKE_URL!
};

export default config;