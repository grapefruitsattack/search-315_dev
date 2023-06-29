'use client'
import type { SongMaster, Albums } from '../../../data/types';
import songMasters from '../../../data/songMaster.json';
import albamMasters from '../../../data/albamMaster.json';
import {YoutubeModal} from "../../../components/YoutubeModal";
import {ShareYoutubeModal} from "../../app/shareModal/ShareYoutubeModal";
import React, { useState } from "react";

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
    bg-gradient-to-tr from-blue-800/0 via-sky-500/0 to-blue-300/30
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
              src={`http://img.youtube.com/vi/`+ song?.youtubeId +`/1.jpg`}
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
      <div className="grid grid-cols-3 col-span-3">
        <button
        className="col-span-1 hidden lg:grid"
          type="button"
          aria-controls="contents"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "閉じる" : "YouTubeで聴く"}
        </button>

        <div className ="col-span-1 lg:hidden">
        <YoutubeModal id ={song?.youtubeId}/>
          </div>
      <div>
        <ShareYoutubeModal 
          id ={song?.youtubeId} title={song?.songTitle} artistName={song?.displayArtist}/>
      </div>
      <button onClick={() => copyTextToClipboard(song?.songTitle)}>
        Copy!
      </button>

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
