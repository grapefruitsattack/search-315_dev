'use client'
import type { SongMaster, Albums } from '../../../data/types';
import songMasters from '../../../data/songMaster.json';
import albamMasters from '../../../data/albamMaster.json';
import {YoutubeModal} from "../../../components/YoutubeModal";
import {ShareYoutubeModal} from "../../app/shareModal/ShareYoutubeModal";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Tooltip} from "@chakra-ui/react";
import Link from 'next/link';

export default function SongBlock(
  { albumId,trackNo,results }: { albumId: string, trackNo: number, results: SongMaster}
) {
  const song = results;
  const albam = albamMasters.find(data => data.albumId === song?.albumId);
  const imgSrc: string = song?.youtubeId || '';
  
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    font-sans 
    `}>
      <div 
        className ={`
          grid grid-cols-song 
          auto-rows-auto
          m-0
        `}
      >

          <div className ="row-span-2">
            
          <Link
            className =""
                href={`../song/` + song?.songId}
          >
          {imgSrc===''
            ?
            <img 
              className={`object-cover object-center h-[60px] w-[59px] rounded-lg`}
              src="https://placehold.jp/bdbdbd/ffffff/150x150.png?text=no%20image"
              alt="アートワーク"
            />
            :
            <img
              className={`object-cover object-center h-[60px] w-[59px] rounded-lg`}
              src={`https://img.youtube.com/vi/`+ song?.youtubeId +`/1.jpg`}
              alt="アートワーク"
            />
            }
          </Link>
          </div>
          <Link
            className ="
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
            href={`/song/` + song?.songId}
            >
                {song?.songTitle}
          </Link>
          
          <div className ="
            row-span-1 col-span-2 
            text-sm leading-tight text-zinc-700
            pt-1 pl-1
          ">
          {song?.displayArtist}
          </div>
          <div className ="
            row-span-1 col-span-3 leading-none
            hidden lg:flex 
            break-all mb-1
          ">
            <a 
              className ="text-xs text-gray-500 underline hover:text-gray-400"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            >{albam?.albumTitleFull}</a>
          </div>
      </div>
      <div className="grid grid-cols-3 gap-x-2">
      {imgSrc===''
            ?<div className = 'inline-block '></div>
            :
            <a className="w-full"
              href={`https://youtu.be/${song?.youtubeId}`}
            target="_blank" rel="noopener noreferrer">
            <motion.button
                    className='rounded-lg border border-red-500 w-full h-full
                      text-red-500 text-sm font-sans leading-tight
                      hover:bg-red-500 hover:text-red-100 
                      transition-all duration-500 ease-out
                      
                      '
                    type="button"
                    aria-controls="contents"
                    aria-expanded={isOpen}
            >
              <div className='flex flex-wrap justify-center items-center'>
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

      <ShareYoutubeModal 
        youtubeId ={song?.youtubeId} 
        title={song?.songTitle} 
        artistName={song?.displayArtist}
        songId={song?.songId}
      />
      <Tooltip className = '' placement='top' label='曲名をコピーしました' isOpen = {tooltipOn}>
      <motion.button className='rounded-lg border border-green-500 
          text-green-500 text-sm font-sans leading-tight
          hover:bg-green-500 hover:text-green-100 
          transition-all duration-500 ease-out
          '
        onClick={() => copyTextToClipboard(song?.songTitle)}
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
          <div className="">コピー</div>
        </div>
      </motion.button>
      </Tooltip>


      </div>

    </section>
    
    )}
