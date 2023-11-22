'use client'
import type { MvInfo } from '../../../../data/types';
import { motion } from "framer-motion";

const mvTypeNames: {
    mvType: string;
    mvName: string;
}[]=[
    {mvType:'LOS',mvName:'エムステMV'}
    ,{mvType:'ANIME_OP',mvName:'TVアニメOP'}
    ,{mvType:'GS_3D',mvName:'サイスタ3Dライブ'}
    ,{mvType:'GS_1stAnniv',mvName:'サイスタ1周年PV'}
    ,{mvType:'GS_3D_ALL',mvName:'サイスタ3Dライブまとめ'}
    ,{mvType:'GS_PROM',mvName:'サイスタ紹介プレイリスト'}
    ,{mvType:'DANCE',mvName:'振り付け講座'}
    ,{mvType:'FC_MV',mvName:'公開MV'}
]

export default function Mv({ mvInfos }: { mvInfos: MvInfo[] }) {
    return(
    <>
        <div 
            className="
                text-2xl font-mono flex items-center w-full mb-2
                after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
            "
        >
            <svg className="mr-1 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM4 5V19H20V5H4ZM12 12.1707V6H17V8H14V15C14 16.6569 12.6569 18 11 18C9.34315 18 8 16.6569 8 15C8 13.3431 9.34315 12 11 12C11.3506 12 11.6872 12.0602 12 12.1707Z"></path></svg>
            {'関連動画'}
        </div>
        <div className="flex flex-col gap-4">
            {mvInfos.map((info, index) => (
                <div
                    key={index} >
                    <div 
                        key={index} 
                        className='flex flex-wrap justify-start items-center font-sans font-black lg:text-base text-sm'>
                                {info.songName}
                    </div>
                    <a 
                        className=""
                        href={info.url}
                      target="_blank" rel="noopener noreferrer">
                      <motion.button
                              className='rounded-lg border-2 border-red-500 w-fit h-[50px]
                                text-red-500 font-sans leading-tight
                                hover:bg-red-500 hover:text-red-100 
                                transition-all duration-500 ease-out
                                fill-red-500 hover:fill-red-100 
                                lg:text-lg text-sm px-5
                                '
                              type="button"
                              aria-controls="contents"
                      >
                        <div className='flex flex-wrap justify-center items-center font-sans font-black'>
                            {mvTypeNames.find((data)=>data.mvType===info.mvType)?.mvName}
                            <span className="">
                            <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                            </span>
                        </div>
                        </motion.button>
                    </a>
                </div>
            ))}
        </div>
    </>
    )
}