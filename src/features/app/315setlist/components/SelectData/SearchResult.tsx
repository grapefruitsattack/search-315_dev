'use client'
import { use315SetlistData } from '../../../../../features/common/hooks/use315SetlistData'
import {SearchParams} from '../../class/SearchParams';
import {SetListData} from '../../class/SetListData';
import {SearchSongsFor315SetList} from '../../utils/SearchSongsFor315SetList';
import songInfoDesc from '../../../../../data/songInfoDesc.json';
import songInfoAsc from '../../../../../data/songInfoAsc.json';
import type { SongMaster, Albums, SongInfo, Tabs } from '../../../../../data/types';

const STORAGE_315SETLIST_SERVICE = '315SetlistData';

export default function SearchResult({searchParams}:{ searchParams: SearchParams}) {
    
    const ResultDesc: SongMaster[] = SearchSongsFor315SetList(searchParams,songInfoDesc);
    const ResultAsc: SongMaster[] = SearchSongsFor315SetList(searchParams,songInfoAsc);

    const AlbumsDesc: String[] = Array.from(new Set(ResultDesc.map(data => {return data.albumId;})));
    const AlbumsAsc: String[] = Array.from(new Set(ResultAsc.map(data => {return data.albumId;})));


    //保存用ローカルストレージ取得
    const [subscService, setSubscService] = use315SetlistData(new SetListData());

    return(
    <>
    {AlbumsDesc.map((data, index)=>{
    const useResult: SongMaster[] = ResultDesc.filter(result=>result.albumId===data);
    return(
    <div key={index}>{useResult[0].albumId}
    {useResult.map((data, index)=>(
    <div key={index}>
    <button 
        className='text-red-400'
        onClick={()=>{
            subscService.setListSongs.push(data);
            setSubscService(subscService);
            console.log(subscService)
        }}
    > {data.songTitle}</button>
    </div>))}
    
    </div>
    )})}
    </>
    )
}