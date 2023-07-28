'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import type { SongMaster,Albums,MvInfo,LiveMaster } from '../../../../data/types';
import MvInfos from '../../../../data/mvInfo.json';
import GetArtWorkSrc from '../../../common/utils/GetArtWorkSrc';
import SearchLiveBySongId from '../../../common/utils/SearchLive';
import {ShareYoutubeModal} from "../../../app/shareModal/ShareYoutubeModal";
import OtherVersion from './OtherVersion'
import Mv from './Mv'
import Live from './Live'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

export default function SongContent({ result, albumResult }: { result: SongMaster, albumResult: Albums }) {

    //MV情報
    const mv : MvInfo[] | undefined 
        = MvInfos.filter(data => data.songId === result.songId || data.songId === result.commonSong);
    //ライブ情報
    const live : LiveMaster[] = SearchLiveBySongId(result);
    //アートワーク
    const imgSrc: string = GetArtWorkSrc(albumResult.sereisId||'',result.isSoloColle,result.isUnitColle);
    //リリース日
    const releaseDate: string 
        = new Date(
            Number(result.releaseDate.substring(0,4))
            ,Number(result.releaseDate.substring(4,6)-1)
            ,Number(result.releaseDate.substring(6,8))).toLocaleDateString();



    return(
        <article className="pt-24 pb-36 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-mono">

        <section className="mt-5 mb-16 text-start align-middle gap-x-5">
            <div className='grid lg:grid-cols-songPageLg grid-cols-1 grid-rows-4 pt-8 '>
                {/* アートワーク */}
                <div 
                    className={`
                        row-span-6 lg:w-auto w-[120px] inline-block 
                    `}
                >
                    <img
                    className={`object-cover object-center lg:h-[120px] lg:w-[120px] h-auto w-full max-w-[400px] aspect-square rounded-lg`}
                    src={`/artwork/${imgSrc}.png`}
                    alt="アートワーク"
                    />
                </div>
                {/* 情報 */}
                <div 
                    className={`
                        lg:w-auto inline-block row-span-4 px-2
                    `}
                >
                    <div className="text-lg font-sans">
                        <a 
                        className ="hover:text-sky-300 underline text-slate-500"
                        href={`/album/` + result.albumId}
                        >{albumResult.albumTitleFull}
                        </a>
                    </div>
                    <div className="text-3xl font-mono font-bold inline-block">
                        {result.songTitle}
                    </div>
                    <div className="text-lg font-sans text-slate-500">
                        {result.displayArtist}
                    </div>
                    <div className="text-base font-sans text-slate-400 pt-px">
                        {releaseDate}
                    </div>
                </div>
            </div>

            {/* ボタン */}
            <div className='grid grid-cols-3 pt-8 gap-y-[9px] lg:w-1/2 h-[80px] '>
                {/* Youtube */}
                {result.youtubeId===''
                ?<></>
                :
                <div 
                    className={`
                        lg:w-auto inline-block row-span-1 lg:px-2 px-1
                    `}
                >
                    <a className="w-full"
                    href={`https://youtu.be/${result.youtubeId}`}
                    target="_blank" rel="noopener noreferrer">
                        <motion.button
                            className='rounded-lg border-2 border-red-500 w-full h-full
                            text-red-500 font-sans leading-tight
                            hover:bg-red-500 hover:text-red-100 
                            transition-all duration-500 ease-out
                            fill-red-500 hover:fill-red-100 
                            lg:text-lg text-base
                            '
                            type="button"
                            aria-controls="contents"
                        >
                            <div className='flex flex-wrap justify-center items-center font-sans font-black'>
                                {'YouTube'}<FontAwesomeIcon className="pl-0.5" icon={faArrowUpRightFromSquare} />
                            </div>
                        </motion.button>
                    </a>
                </div>    
                }
                {/* YouTube Music */}
                {result.youtubeId===''
                ?<></>
                :
                <div 
                    className={`
                        lg:w-auto inline-block row-span-1 lg:px-2 px-1
                    `}
                >
                    <a className="w-full"
                    href={`https://music.youtube.com/watch?v=${result.youtubeId}`}
                    target="_blank" rel="noopener noreferrer">
                    <motion.button
                        className='rounded-lg border-2 border-orange-500 w-full h-full
                        text-orange-500 font-sans leading-tight
                        hover:bg-orange-500 hover:text-orange-100 
                        transition-all duration-500 ease-out
                        fill-orange-500 hover:fill-orange-100 
                        lg:text-lg text-base
                        '
                        type="button"
                        aria-controls="contents"
                    >
                        <div className='flex flex-wrap justify-center items-center font-sans font-black'>
                            {'YouTube Music'}<FontAwesomeIcon className="pl-0.5" icon={faArrowUpRightFromSquare} />
                        </div>
                    </motion.button>
                    </a>
                </div>    
                }
                <div 
                    className={`
                        lg:w-auto inline-block row-span-1 lg:px-2 px-1
                    `}
                >
                    <ShareYoutubeModal 
                        youtubeId ={result.youtubeId} 
                        title={result.songTitle} 
                        artistName={result.displayArtist}
                        pass={'song/'+result.songId}
                    />
                </div>    
            </div>

            <div  className="w-fit
                pt-8 text-base font-sans break-all
                "
            >
                <p>リリースページ：
                    <a 
                    className ="
                    underline inline-flex
                    text-slate-400
                    hover:text-sky-300 
                    "
                    href={albumResult.releasePage}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <span>
                        {albumResult.releasePage} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </span>
                    </a>
                </p>
            </div>
        </section>

        {/* MV */}
        {
        mv === undefined || mv.length === 0
        ?<></>
        :
        <section className="mt-10">
            <Mv mvInfos={mv}/>
        </section>
        }

        {/* ライブ */}
        {
        live === undefined || live.length === 0
        ?<></>
        :
        <section className="mt-10">
            <Live results={live}/>
        </section>
        }

        {/* 他のバージョン */}
        {
        result.commonSong === ''
        ?<></>
        :
        <section className=" mt-10">
            <OtherVersion id={result.songId} commonSongId={result.commonSong}/>
        </section>
        }

        </article>
    )
}
