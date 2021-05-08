export interface Song {
  id: string,
  name: string,
  cover_image_path: string,
  artist: Artist,
  music_file_path: string;
}

export interface Artist {
  id: string,
  name: string
}