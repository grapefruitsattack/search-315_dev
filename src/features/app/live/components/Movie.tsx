'use client'
import type { LiveMovie } from '../../../../data/types';
import { motion } from "framer-motion";

export default function Movie({ results }: { results: LiveMovie[] }) {

    
    return(
        <>
            <div 
                className="
                    text-2xl font-mono flex items-center w-full mb-2
                    after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
                "
            >
                <svg className="mr-1 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM4 5V19H20V5H4ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
                {'ダイジェスト'}
            </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {results.map((result, index) => (
                <>
                    <a 
                        key={index} 
                        className=""
                        href={`https://youtu.be/${result.youtubeId}`}
                      target="_blank" rel="noopener noreferrer">
                      <motion.button
                              className='rounded-lg border-2 border-red-500
                                w-full min-h-[40px]
                                text-red-500 font-sans leading-tight
                                hover:bg-red-500 hover:text-red-100 
                                transition-all duration-500 ease-out
                                fill-red-500 hover:fill-red-100 
                                lg:text-lg text-sm px-3
                                '
                              type="button"
                              aria-controls="contents"
                      >
                        <div className='flex flex-wrap justify-center items-center font-sans font-black'>
                            {result.typeName}
                            <span className="">
                            <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                            </span>
                        </div>
                        </motion.button>
                    </a>
                </>
            ))}
        </div>
        </>
    )
}