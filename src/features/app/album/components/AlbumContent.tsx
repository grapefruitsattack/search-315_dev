'use client'
import type { SongMaster,Albums } from '../../../../data/types';
import GetArtWorkSrc from '../../../common/utils/GetArtWorkSrc';
import {ShareYoutubeModal} from "../../../app/shareModal/ShareYoutubeModal";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

export default function AlbumContent({ album, }: { album: Albums}) {

    //アートワーク
    const imgSrc: string = GetArtWorkSrc(album.sereisId||'',album.isSoloColle,album.isUnitColle);
    //リリース日
    const releaseDate: string 
        = new Date(
            Number(album.releaseDate.substring(0,4))
            ,Number(album.releaseDate.substring(4,6))
            ,Number(album.releaseDate.substring(6,8))).toLocaleDateString();
    
    return(
       
        <article className="pt-24 py-24 px-12 lg:px-24 mb-12 bg-white lg:max-w-[1500px] lg:m-auto font-mono">
            

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
                    lg:w-auto inline-block row-span-4 mx-2
                `}
            >
                <div className="text-lg font-sans text-slate-500">
                    {album.displayArtist}
                </div>
                <div className="text-3xl font-mono font-bold inline-block">
                    {album.albumTitleFull}
                </div>
                <div className="text-base font-sans text-slate-400 pt-px">
                    {releaseDate}
                </div>
            </div>
            {/* ボタン */}
            <div className='grid grid-cols-3 pt-8 gap-y-[9px] lg:w-1/2 h-[80px] '>
                {/* Youtube */}
                {album.youtubeId===''
                ?<></>
                :
                <div 
                    className={`
                        lg:w-auto inline-block row-span-1 lg:px-2 px-1
                    `}
                >
                    <a className="w-full"
                    href={`https://youtu.be/${album.youtubeId}`}
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
                {album.youtubeId===''
                ?<></>
                :
                <div 
                    className={`
                        lg:w-auto inline-block row-span-1 lg:px-2 px-1
                    `}
                >
                    <a className="w-full"
                    href={`https://music.youtube.com/watch?v=${album.youtubeId}`}
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
                        youtubeId ={album.youtubeId} 
                        title={album.albumTitleFull} 
                        artistName={album.displayArtist}
                        songId={album.albumId}
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
                    href={album.releasePage}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <span>
                        {album.releasePage} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </span>
                    </a>
                </p>
            </div>

        </div>
        </article>
    )
}