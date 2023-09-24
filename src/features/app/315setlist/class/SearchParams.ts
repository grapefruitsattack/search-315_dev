
export class SearchParams {
  subsc: string;
  colle: string;
  singingInfos: string[];
  albums: string[];

  constructor() {
      this.subsc = '0';
      this.colle = '1';
      this.singingInfos=[];
      this.albums=[];
  };

}