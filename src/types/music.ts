export interface Music {
  _id: string;
  title: string;
  duration_ms: number;
  image_url: string;
  release_date: string;
  genre: string;
  artist: {
    name: string;
    popularity: number;
    image_url: string;
    followers: number; // You might want to replace this with the actual genre type
    _id: string;
  };
}