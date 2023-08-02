'use client'
import { useState } from "react";
import Link from 'next/link';
import type { SongMaster,LiveSetLists } from '../../../../data/types';
import liveSetLists from '../../../../data/liveSetLists.json';
import songMaster from '../../../../data/songMaster.json';
import SongBlock from "../../../common/components/SongBlock";

export default function SetLists({ livePerId }: { livePerId: string }) {
    
    const liveSetListsResults : LiveSetLists[]
        = liveSetLists.filter(data => data.livePerId === livePerId) || [];
    const results : (SongMaster | undefined)[] 
        = liveSetListsResults.map((data)=>{
            return songMaster.find(song=>song.songId === data.songId);
        });

    const [isOpen, setISopen] = useState(false);

    return(
    <>
        <a 
            className="
                text-2xl font-mono flex items-center w-full
                after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
                cursor-pointer lg:cursor-auto 
            "
            onClick={()=>setISopen(!isOpen)}
        >
                {isOpen
                ?<svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
                :<svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
                }
                <svg className="fill-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M20 3V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17C12 14.7909 13.7909 13 16 13C16.7286 13 17.4117 13.1948 18 13.5351V5H9V17C9 19.2091 7.20914 21 5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C5.72857 13 6.41165 13.1948 7 13.5351V3H20ZM5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z"></path></svg>
                {'セットリスト'}
        </a>
        <div className={`
             items-start gap-3 grid-cols-1 lg:grid-cols-3 mt-5
             ${isOpen?'lg:grid grid':'lg:grid hidden'}    
        `}>
        {results.map((result, index) => 
            result === undefined
            ?(<></>)
            :(
                <Link
                key={index} 
                className ="
                  inline-block
                  w-fit
                  text-base p-0.5
                  rounded-md
                  underline
                  leading-tight
                  font-sans
                  row-span-1 col-span-2 
                  rounded-md px-1 pt-1 
                  from-cyan-100/30 to-violet-200/30
                  text-zinc-800
                  hover:bg-gradient-to-tl
                  hover:text-cyan-900 
                  duration-500 ease-out
                "
                href={`/song/` + result.songId}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <span>
                    {result.songTitle}
                    </span>
                </Link>
            )
        )}
        </div>

    </>
    )
}