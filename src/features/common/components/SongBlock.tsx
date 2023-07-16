'use client'
import type { SongMaster, Albums } from '../../../data/types';
import songMasters from '../../../data/songMaster.json';
import albamMasters from '../../../data/albamMaster.json';
import {YoutubeModal} from "../../../components/YoutubeModal";
import {ShareYoutubeModal} from "../../app/shareModal/ShareYoutubeModal";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SongBlock(
  { albumId,trackNo,results }: { albumId: string, trackNo: number, results: SongMaster}
) {
  const song = results;
  const albam = albamMasters.find(data => data.albumId === song?.albumId);
  const imgSrc: string = song?.youtubeId || '';
  
const [isOpen, setIsOpen] = useState<boolean>(false)

  function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    .then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
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
          grid grid-cols-song 
          auto-rows-auto
          m-0
        `}
      >

          <div className ="row-span-2">
            
          <a
            className =""
                href={`../song/` + song?.songId}
                target="_blank"
                rel="noopener noreferrer"
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
          </a>
          </div>
          <div
            className ="row-span-1 col-span-2 px-1 pt-1"
            >
              <a
            className ="inline-block
            text-xl text-zinc-800 p-0.5
            rounded-md
            underline
            leading-tight
            font-sans hover:border-gray-300 hover:bg-gray-100/50"
                href={`../song/` + song?.songId}
                target="_blank"
                rel="noopener noreferrer"
              >
                {song?.songTitle}
              </a>
          </div>
          
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
            break-all
          ">
            <a 
              className ="text-xs text-gray-500 hover:underline "
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >{albam?.albumTitleFull}</a>
          </div>
      </div>
      <div className="grid grid-cols-3 gap-x-2">

      {imgSrc===''
            ?<div className = 'hidden lg:inline-block '></div>
            :
            <motion.button
              className='rounded-lg border border-red-500 
                text-red-500 text-sm font-sans leading-tight
                hover:bg-red-500 hover:text-red-100 
                transition-all duration-500 ease-out
                hidden lg:inline-block 
                '
              type="button"
              aria-controls="contents"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              >
              <div className='flex flex-wrap justify-center items-center'>
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



      <div className ={`inline-block lg:hidden`}>
          {imgSrc===''
            ?<></>
            :<YoutubeModal id ={song?.youtubeId} type='song'/>
          }
      </div>


      <ShareYoutubeModal 
        youtubeId ={song?.youtubeId} 
        title={song?.songTitle} 
        artistName={song?.displayArtist}
        songId={song?.songId}
      />
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
      <div
        id="contents"
        className="accordion-body col-span-3 hidden lg:grid"
        aria-hidden={!isOpen}
      >
          <iframe className="w-full aspect-video" loading="lazy" src={`https://www.youtube.com/embed/`+song?.youtubeId + `?mute=1&modestbranding=1`} allow="fullscreen"></iframe>

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
    
    )}
