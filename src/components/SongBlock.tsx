'use client'
import type { SongMaster, Albums } from '../data/types';
import songMasters from '../data/songMaster.json';
import albamMasters from '../data/albamMaster.json';
import {YoutubeModal} from "./YoutubeModal";


export default function SongBlock(
  { albumId,trackNo,results }: { albumId: string, trackNo: number, results: SongMaster}
) {
  const song = results;
  const albam = albamMasters.find(data => data.albumId === song?.albumId);
  const imgSrc: string = song?.youtubeId || '';


    return (
      
    <section className={`group rounded-xl 
    border-double border-4 border-blue-900/30
    `}>
      <div 
        className ={`
          grid grid-cols-song 
          auto-rows-auto
          m-0
        `}
      >
          <div className ="row-span-3">
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
          {/* <img
          className={`object-cover object-center h-[60px] w-[59px] rounded-lg`}
          src={`http://img.youtube.com/vi/`+ song?.youtubeId +`/1.jpg`}
          alt="アートワーク"
          /> */}
          {/* <img data-src="holder.js/60x59?outline=yes&size=0.1&text=." /> */}
          </div>
          <a 
            className ="row-span-2 col-span-2 pl-1
            text-xl text-zinc-800 

            leading-tight
            font-sans hover:border-gray-300 hover:bg-gray-100/50"
            href={`../song/` + song?.songId}
            target="_blank"
            rel="noopener noreferrer"
            >{song?.songTitle}</a>
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
      <div 
        className ={`grid m-0
            grid-cols-song auto-rows-auto`}
      >
          <details className ="col-span-3 bg-gray-100/50 hidden lg:grid">
          <summary>Youtubeで聴く</summary>
          <iframe className="w-full" loading="lazy" src={`https://www.youtube.com/embed/`+song?.youtubeId + `?mute=1&modestbranding=1`} allow="fullscreen"></iframe>
          </details>
          <div className ="col-span-3 lg:hidden">
          <YoutubeModal/>
          </div>
      </div>
    </section>
    )}
