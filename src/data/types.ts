export type Albums = {
  sereisId: string;
  albumId: string;
  albumTitleFull: string;
  colleFlg: number;
  isSoloColle: number;
  isUnitColle: number;
  releaseDate: string;
  displayArtist: string;
  releasePage: string;
  youtubeId: string;
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
  releaseDate: string;
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
  isSoloColle: number;
  isUnitColle: number;
  releaseDate: string;
};

export type MvInfo = {
  songId: string;
  mvType: string;
  youtubeId: string;
  songName: string;
};

export type Tabs = {
  title: string;
  id: string;
  icon: string;
  color: string;
  disabled: boolean;
  content: JSX.Element;
};