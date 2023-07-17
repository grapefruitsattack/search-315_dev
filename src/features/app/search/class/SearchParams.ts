import { ReadonlyURLSearchParams } from 'next/navigation';

export class SearchParams {
  order: string;
  subsc: string;
  colle: string;
  [key: string]: string;

  constructor(urlSearchParams : ReadonlyURLSearchParams) {
      this.order = urlSearchParams.get('order') || 'desc';
      this.subsc = urlSearchParams.get('subsc') || '0';
      this.colle = urlSearchParams.get('colle') || '0';
      const search :string[] = urlSearchParams.get('q')?.split(' ') || [];
      search.forEach(data=>{
        this[data] = '1';
      });
  };

}