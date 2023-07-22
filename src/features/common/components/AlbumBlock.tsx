'use client'
import type { SongMaster, Albums } from '../../../data/types';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {YoutubeModal} from "../../../components/YoutubeModal";
import {ShareYoutubeModal} from "../../app/shareModal/ShareYoutubeModal";
import {Tooltip} from "@chakra-ui/react";
import Link from 'next/link';

export default function AlbumBlock(
  { results }: { results: Albums}
) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [tooltipOn, setTooltipOn] = useState<boolean>(false);

  function copyTextToClipboard(text: string) {
      navigator.clipboard.writeText(text)
      .then(function() {
        setTooltipOn(true);
        window.setTimeout(function(){setTooltipOn(false);}, 1500);
      }, function(err) {
      });
    }
      
  return (
      <section className={`group
      rounded-md
      bg-white
      drop-shadow-lg
      `}>
      <div 
        className ={`
          grid grid-cols-album
          auto-rows-auto
          m-0 
        `}
      >
      <div className ="row-span-3">
          <Link
            className =""
            href={`../song/` + results.albumId}
          >
          {results.songYoutubeId===''
            ?
            <img 
              className={`object-cover object-center h-[120px] w-[119px] rounded-lg`}
              src="https://placehold.jp/bdbdbd/ffffff/150x150.png?text=no%20image"
              alt="アートワーク"
            />
            :
            <img
              className={`object-cover object-center h-[120px] w-[119px] rounded-lg`}
              src={`https://img.youtube.com/vi/`+ results.songYoutubeId +`/mqdefault.jpg`}
              alt="アートワーク"
            />
            }
          </Link>
          </div>
          <div
            className ="row-span-1 px-1"
          >
            <Link
              className ="
              w-full h-full
              row-span-1 px-1
              inline-block
              text-xl p-0.5
              rounded-md
              underline
              leading-tight
              font-sans
              row-span-1 col-span-2 
              rounded-md px-1 pt-1 
              bg-gradient-to-tl from-cyan-100/30 to-violet-200/30
              text-zinc-800
              hover:bg-cyan-100/50
              hover:text-cyan-900 
              duration-500 ease-out
              "
              href={`/album/` + results.albumId}
            >
                {results.albumTitleFull}
            </Link>
          </div>

          <div
            className ="row-span-1 px-1 "
            >
          <a 
            className ="inline-block
            text-xs leading-tight text-zinc-700
            pl-1 pb-[32px]
          ">
          {results.displayArtist}
          </a>
          </div>

      <div className="grid grid-cols-3 gap-x-2">
      <div className='relative w-full'>
      {results.songYoutubeId===''
            ?<div className='inline-block relative w-full'></div>
            :
            <a className="w-full"
              href={`https://youtube.com/playlist?list=${results.youtubeId}`}
            target="_blank" rel="noopener noreferrer">
            <motion.button
              className='rounded-lg border border-red-500
                text-red-500 text-sm font-sans leading-tight
                hover:bg-red-500 hover:text-red-100 
                transition-all duration-500 ease-out
                
                 h-[30px] w-full absolute bottom-0
                '
              type="button"
              aria-controls="contents"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              >
              <div className='flex flex-wrap justify-center items-center h-[30px]'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" 
                    width="30" height="30" viewBox="0 0 24 24" strokeWidth="0.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
               </div>
              </motion.button>
              </a>
      }
      </div>

      
      <div className='inline-block relative w-full'>
      <div className='h-[30px] w-full absolute bottom-0'>
      <ShareYoutubeModal 
        youtubeId ={results.youtubeId} 
        title={results.albumTitleFull} 
        artistName={results.displayArtist}
        songId={results.albumId}
      />
      </div>
      </div>

      <div className='inline-block relative w-full'>
    <Tooltip className = '' placement='top' label='アルバム名をコピーしました' isOpen = {tooltipOn}>
      <motion.button className='rounded-lg border border-green-500 
          text-green-500 text-sm font-sans leading-tight
          hover:bg-green-500 hover:text-green-100 
          transition-all duration-500 ease-out w-full h-[30px] absolute bottom-0
          '
        onClick={() => copyTextToClipboard(results.albumTitleFull)}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.05 }}
      >
        <div
          className='flex flex-wrap justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="flex icon icon-tabler icon-tabler-copy justify-center items-center" 
        width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
          <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
        </svg>
          <div className="hidden lg:inline-block">コピー</div>
        </div>
      </motion.button>
    </Tooltip>

      </div>

      </div>

      <div className="col-span-1 hidden lg:grid"></div>



      </div>   
      
      </section>
  )
}