'use client'
import type { LivePerformer,SingingMaster } from '../../../../data/types';
import livePerformer from '../../../../data/livePerformer.json';
import singingMaster from '../../../../data/singingMaster.json';

export default function Performer({ livePerId }: { livePerId: string }) {

    const LivePerformerResults: LivePerformer[] 
        = livePerformer.filter(data=>data.livePerId === livePerId && data.singingInfoId.substring(0, 3) !== '00')||[];
    const results:SingingMaster[] 
        = LivePerformerResults.map(data=>{
            return singingMaster.find(s=>s.singingInfoId===data.singingInfoId)})
            .filter((item): item is SingingMaster => typeof item == 'object');


    return(
    <>
        <div 
            className="
                text-2xl font-mono flex items-center w-full mb-2
                after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
            "
        >
            
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="rgba(55,124,126,1)"></path></svg>
          {'出演'}
        </div>
        <div className={`grid
            grid-cols-2 lg:grid-cols-4 gap-2 pt-4
        `}>
        {results.map((result, index) => (
            <div key={index} className = "flex ">
                <a
                className ={`
                rounded-md
                bg-white 
                w-full
                grid
                place-items-start
                lg:text-base text-sm
                underline
                leading-tight
                font-sans
                text-cyan-900
                hover:text-cyan-700 
                duration-500 ease-out
                w-fit h-fit
                `}
                href={`/idol/` + result.singingInfoId}
                >
                    <div className="flex flex-wrap place-content-center">
                    <p className ="text-center">{result.singingInfoName}</p>
                    </div>
                </a>
            </div>
        ))}
        </div>
    </>
    )
}