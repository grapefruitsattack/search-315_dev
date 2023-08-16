'use client'
import type { LiveProduct } from '../../../../data/types';

export default function Products({ results }: { results: LiveProduct[] }) {


    return(
    <>
        <div 
            className="
                text-2xl font-mono flex items-center w-full mb-2
                after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
            "
        >
            <svg className="mr-1 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 11H16L11 18V13H8L13 6V11Z"></path></svg>
            {'収録製品'}
        </div>
        <div className={`grid
             items-start gap-3 grid-cols-1  mt-5    
        `}>
            {results.map((result, index) => (
            <div className='leading-tight'
            key={index} >
            <a
            className ="
             underline font-mono 
            text-slate-500 hover:text-sky-300
            fill-slate-500 hover:fill-sky-500 
            text-sm lg:text-base
            w-fit
            "
            href={result.releasePage}
            target="_blank"
            rel="noopener noreferrer"
            >
                <span>
                {result.productName} 
                <span className="pl-0.5">
                <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                </span>
                </span>
            </a>
            </div>
            ))}
        </div>
    </>
    )
}