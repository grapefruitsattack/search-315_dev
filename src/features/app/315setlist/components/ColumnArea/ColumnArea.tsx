'use client'
import {SetListData} from '../../class/SetListData';
import { use315SetlistData } from '../../../../../features/common/hooks/use315SetlistData'



export default function ColumnArea ({}:{}) {

    //保存用ローカルストレージ取得
    const [selectedSetListData, setSetListData] = use315SetlistData(new SetListData());

    return(
    <>
    <section className="grid gap-1">
    {selectedSetListData.setListSongs.map((data, index)=>{
        return(
            <div className={`
            flex flex-row
            group
            rounded-md
            font-sans bg-cyan-200/30 border`}>
                <div className='basis-8'>
                {index+1}
                </div>
                <button 
                    className='basis-8 bg-white'
                    onClick={()=>{
                        const list = selectedSetListData.setListSongs;
                        list.splice(index, 1);
                        list.splice(index-1, 0, data);
                        setSetListData({...selectedSetListData,setListSongs:list});
                    }}
                >
                {'↑'}
                </button>
                <div className='basis-1/2'>
                    <a className='text-lg'>{data.songTitle}</a> {'-'} {data.displayArtist} {'-'} {data.albumTitle} 
                </div>
            </div>
        )
    })}
    </section>
    </>
    )
}