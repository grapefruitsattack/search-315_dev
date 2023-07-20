'use client'
import songMaster from '../../../../data/songMaster.json';
import type { SongMaster,Albums } from '../../../../data/types';
import SongBlock from "../../../common/components/SongBlock";

export default function OtherVersion({ id ,commonSongId }: { id: string, commonSongId: string }) {

    const result : SongMaster[] | undefined 
      = songMaster.filter(data => data.songId !== id && data.commonSong === commonSongId);

    return(
        <section className=" mt-10">
            <div 
                className="
                    text-2xl font-mono flex items-center w-full
                    after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
                "
            >
                {'その他のバージョン'}
            </div>
            <section className="grid items-start gap-4 grid-cols-1 lg:grid-cols-3 mt-5">
            {result.map((result, index) => (
            <SongBlock 
              key={index} 
              albumId={result.albumId} 
              trackNo={result.trackNo} 
              results={result}
            />
            ))}
            </section>

        </section>
    )
}