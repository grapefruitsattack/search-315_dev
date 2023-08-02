'use client'
import type { LiveProduct } from '../../../../data/types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

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
            <a
            key={index} 
            className ="
            hover:text-sky-300 underline text-slate-500 font-mono 
            text-sm lg:text-base
            w-fit
            "
            href={result.releasePage}
            target="_blank"
            rel="noopener noreferrer"
            >
                <span>
                {result.productName} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </span>
            </a>
            
            ))}
        </div>
    </>
    )
}