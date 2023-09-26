
export class SearchParams {
  subsc: string;
  colle: string;
  singingInfos: string[];
  albums: string[];

  constructor() {
      this.subsc = '1';
      this.colle = '1';
      this.singingInfos=[];
      this.albums=[];
  };

}