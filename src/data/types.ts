export type Albums = {
  album_id: string;
  album_title_full: string;
  album_title: string;
  release_date: string;
  youtube_url: string;
  release_page: string;
};

export type SingingInfo = {
  singingInfoId: string;
  personFlg: number;
  singingInfoName: string;
  singingInfoReadingName: string;
};

export type SongInfo = {
  albumId: string;
  trackNo: number;
  singingInfoId: string;
};

export type SongMaster = {
  albumId: string;
  trackNo: number;
  songTitle: string;
  displayArtist: string;
  youtubeId: string;
  commonSong: string;
};