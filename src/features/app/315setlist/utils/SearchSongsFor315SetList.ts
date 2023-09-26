
import {SearchParams} from '../class/SearchParams';
import type { SongMaster, Albums, SongInfo, Tabs } from '../../../../data/types';
import songMaster from '../../../../data/songMaster.json';
import albumMaster from '../../../../data/albumMaster.json';

export function SearchSongsFor315SetList(
    searchParams: SearchParams, songInfo: SongInfo[]
): SongMaster[] {

    //ユニットIDを消去
    const singingInfos: string[] = searchParams.singingInfos.filter(data=>data.substring(3, 5) !== '00');

    //絞り込み
    let songInfoResults: SongInfo[];
    if(singingInfos.length===0 && searchParams.albums.length===0){
        //メンバーもアルバムも選択されていない場合、絞り込みを行わない
        songInfoResults = songInfo;
    } else if(singingInfos.length===0){
        //対象アルバム
        const targeAlbumIds: string[] = albumMaster.filter(data => searchParams.albums.includes(data.sereisId)).map(data=>data.albumId);
        songInfoResults  = songInfo.filter(data => targeAlbumIds.includes(data.albumId));
    } else if(searchParams.albums.length===0){
        songInfoResults = songInfo.filter(data => searchParams.singingInfos.includes(data.singingInfoId));
    } else {
        //対象アルバム
        const targeAlbumIds: string[] = albumMaster.filter(data => searchParams.albums.includes(data.sereisId)).map(data=>data.albumId);
        songInfoResults 
            = songInfo.filter(data => searchParams.singingInfos.includes(data.singingInfoId) && targeAlbumIds.includes(data.albumId));
    }
    //重複排除
    const distinctSongIds :string[] = Array.from(new Set(songInfoResults.map(data => {
        return data.songId;
      })));
      
    const songInfoDistinctResults: SongInfo[] = [];
    distinctSongIds.forEach(distinctSongId => {
      const res = songInfo.find((data) => data.songId === distinctSongId);
      if(res != null){songInfoDistinctResults.push(res)};
    });
    const songMasterResults: SongMaster[] = [];
    songInfoDistinctResults.forEach(distinctSongId => {
      const res = songMaster.find((data) =>
      data.albumId === distinctSongId.albumId && data.trackNo === distinctSongId.trackNo
      && (searchParams.subsc === "0" || data.youtubeId)
      && (searchParams.colle === "0" || data.colleFlg === 0)
     );
      if(res != null){songMasterResults.push(res)};
    });

    return songMasterResults;
}