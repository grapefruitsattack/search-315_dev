'use client'
import type { SongMaster, Albums } from '../../../data/types';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {YoutubeModal} from "../../../components/YoutubeModal";
import {ShareYoutubeModal} from "../../app/shareModal/ShareYoutubeModal";
import {Tooltip} from "@chakra-ui/react";

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
          <a
            className =""
            href={`../song/` + results.albumId}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
          </div>
          <div
            className ="row-span-1 px-1"
            >
              <a
            className ="inline-block
            text-base text-zinc-800 p-0.5
            rounded-md
            underline
            leading-tight
            font-sans hover:border-gray-300 hover:bg-gray-100/50"
                href={`../song/` + results.albumId}
                target="_blank"
                rel="noopener noreferrer"
              >
                {results.albumTitleFull}
              </a>
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
            ?<div className='hidden lg:inline-block relative w-full'></div>
            :
            <motion.button
              className='rounded-lg border border-red-500 
                text-red-500 text-sm font-sans leading-tight
                hover:bg-red-500 hover:text-red-100 
                transition-all duration-500 ease-out
                hidden lg:inline-block
                 h-[30px] w-full absolute bottom-0
                '
              type="button"
              aria-controls="contents"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              >
              <div className='flex flex-wrap justify-center items-center h-[30px]'>
                {isOpen ? (<>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" 
                    width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg> */}
                  <div>閉じる</div>
                  </>) 
                : (<>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" 
                    width="30" height="30" viewBox="0 0 24 24" strokeWidth="0.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                    <path d="M10 9l5 3l-5 3z"></path>
                  </svg>
                  </>)}
               </div>
              </motion.button>
      }


      <div className ={`inline-block lg:hidden h-[30px] w-full absolute bottom-0`}>
          {results.songYoutubeId===''
            ?<></>
            :<YoutubeModal id ={results.youtubeId} type ='album'/>
          }
      </div>
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
      <div
        id="contents"
        className="accordion-body col-span-1 hidden lg:grid"
        aria-hidden={!isOpen}
      >
          <iframe className="w-full aspect-video" loading="lazy" src={`https://www.youtube.com/embed/videoseries?list=`+results.youtubeId} allow="fullscreen"></iframe>

      </div>
    <style jsx>{`
      .accordion-body {
        height: ${isOpen ? "auto" : 0};
        transition: height 0.3s ease-out;
        overflow: hidden;
      }
    `}</style>

      </div>   
      
      </section>
  )
}