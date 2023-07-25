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
      border-t-4 border-l-4 border-blue-900/20
      `}>
      <div 
        className ={`
          grid grid-cols-album
          auto-rows-auto
          m-0 
        `}
      >
      <div className ="row-span-2 lg:row-span-3 lg:mb-0 mb-px">
          <Link
            className =""
            href={`../song/` + results.albumId}
          >
          {results.sereisId===''
            ?
            <img 
              className={`object-cover object-center h-[100px] w-[99px] rounded`}
              src="https://placehold.jp/bdbdbd/ffffff/150x150.png?text=no%20image"
              alt="アートワーク"
            />
            :
            <img
              className={`object-cover object-center h-[100px] w-[99px] rounded`}
              src={`/artwork/${results.sereisId}.png`}
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
              text-zinc-800
              hover:bg-gradient-to-tl hover:from-cyan-100/30 hover:to-violet-200/30
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

      <div className="grid grid-cols-3 gap-x-2 lg:col-span-1 col-span-2 ">
      <div className='lg:relative static w-full '>
      {results.youtubeId===''
            ?<div className='inline-block lg:relative static l\w-full'></div>
            :
            <a className="w-full"
              href={`https://youtube.com/playlist?list=${results.youtubeId}`}
            target="_blank" rel="noopener noreferrer">
            <motion.button
              className='rounded-lg border-2 border-red-500
                text-red-500 text-sm font-sans leading-tight
                hover:bg-red-500 hover:text-red-100 
                transition-all duration-500 ease-out
                
                 h-[30px] w-full lg:absolute bottom-0
                '
              type="button"
              aria-controls="contents"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              >
              <div className='flex flex-wrap justify-center items-center font-sans font-black'>
                {'YouTube'}
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
      <motion.button className='rounded-lg border-2 border-green-500 
          text-green-500 text-sm font-sans leading-tight
          hover:bg-green-500 hover:text-green-100 
          fill-green-500 hover:fill-green-100 
          transition-all duration-500 ease-out w-full h-[30px] absolute bottom-0
          '
        onClick={() => copyTextToClipboard(results.albumTitleFull)}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.05 }}
      >
        <div
          className='flex flex-wrap justify-center items-center'>
        <svg 
        className="flex icon icon-tabler icon-tabler-copy justify-center items-center" 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
          {/* <div className="">コピー</div> */}
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