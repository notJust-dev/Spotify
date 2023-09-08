export type Track = {
  id: string;
  name: string;
  preview_url?: string | null;
  album: Album;
  artists: Artist[];
};

export type Album = {
  id: string;
  name: string;
  images: Image[];
};

export type Artist = {
  id: string;
  name: string;
  images?: Image[];
};

export type Image = {
  url: string;
  height?: number;
  width?: number;
};
