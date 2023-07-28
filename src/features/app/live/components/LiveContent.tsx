'use client'
import type { SongMaster,Albums,MvInfo,LiveMaster } from '../../../../data/types';

export default function LiveContent({ result }: { result: LiveMaster }) {

    
    return(
        <article className="pt-24 pb-36 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-mono">
            {result.liveName + ' ' + result.perName}
        </article>
    )
    }