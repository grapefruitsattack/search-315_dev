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
    const [selectedSetListData, setSetListData] = use315SetlistData(new SetListData());

    return(
    <>
    {AlbumsDesc.map((data, index)=>{
    const useResult: SongMaster[] = ResultAsc.filter(result=>result.albumId===data);
    return(
    <div key={index} className='border-b-2'>
    {useResult[0].albumTitle}
        {useResult.map((data, index)=>{
            const added: boolean = selectedSetListData.setListSongs.some(song=>song.songId===data.songId);
            return(
            <div key={index} className='flex items-center'>
                <button 
                    className='text-white bg-black rounded pr-1 mb-1 h-fit'
                    onClick={()=>{
                        setSetListData({...selectedSetListData,setListSongs:[...selectedSetListData.setListSongs,data]});
                    }}
                    disabled={added}
                > 
                <div className={`flex items-center text-sm `}>
                <svg className={`fill-white ${added?'hidden':''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" width="16" height="16"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                <svg className={`fill-white ${added?'':'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" width="16" height="16"><path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path></svg>
                {added?'追加済み':'追加'}</div>
                </button>
                <span className='pl-2 lg:w-[150px]'>{data.songTitle}</span>
            </div>
            )
        })}
    
    </div>
    )})}
    </>
    )
}