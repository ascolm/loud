export interface Song {
  id: string,
  name: string,
  cover_image_path: string,
  artist: Artist
}

export interface Artist {
  id: string,
  name: string
}