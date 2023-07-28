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

export type LiveMaster = {
  liveId: string;
  perId: string;
  livePerId: string;
  liveName: string;
  perName: string;
  perDate: string;
  officialPage: string;
};

export type LiveSetLists = {
  livePerId: string;
  trackNo: number;
  songId: string;
  coverFlg: string;
  name: string;
};

export type LiveProduct = {
  productId: string;
  productName: string;
  livePerId: string;
  releasePage: string;
  releaseDate: string;
};

export type LiveMovie = {
  productId: string;
  youtubeId: string;
  type: string;
};

export type Tabs = {
  title: string;
  id: string;
  icon: string;
  color: string;
  disabled: boolean;
  content: JSX.Element;
};