export type Albums = {
  sereisId: string;
  albumId: string;
  albumTitleFull: string;
  colleFlg: number;
  releaseDate: string;
  displayArtist: string;
  releasePage: string;
  youtubeId: string;
  songYoutubeId: string;
};

export type SingingMaster = {
  singingInfoId: string;
  personFlg: number;
  singingInfoName: string;
  singingInfoReadingName: string;
};

export type SongInfo = {
  albumId: string;
  trackNo: number;
  songId: string;
  singingInfoId: string;
};

export type SongMaster = {
  trackNo: number;
  albumId: string;
  songId: string;
  songTitle: string;
  displayArtist: string;
  commonSong: string;
  youtubeId: string;
  trialYoutubeId: string;
  colleFlg: number;
  releaseDate: string;
};

export type Tabs = {
  title: string;
  id: string;
  icon: string;
  color: string;
  content: JSX.Element;
};