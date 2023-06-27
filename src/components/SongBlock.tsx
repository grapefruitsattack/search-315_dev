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


    return (
      
    <section className={`group rounded-lg bg-gray-300/50`}>
      <div 
        className ={`grid m-0
            grid-cols-song auto-rows-auto`}
      >
          <div className ="row-span-3">
          <img
          className={`object-cover object-center h-[50px] w-[48px] rounded-lg`}
          src={`http://img.youtube.com/vi/`+ song?.youtubeId +`/1.jpg`}
          alt="アートワーク"
          />
          {/* <img data-src="holder.js/50x48?outline=yes&size=0.1&text=." /> */}
          </div>
          <a 
            className ="row-span-1 text-xl font-sans hover:border-gray-300 hover:bg-gray-100"
            href={`../song/` + song?.songId}
            target="_blank"
            rel="noopener noreferrer"
            >{song?.songTitle}</a>
          <div className ="row-span-1 text-xs text-center">{albam?.releaseDate}</div>
          <div className ="row-span-1 col-span-2 text-sm">
          {song?.displayArtist}
          </div>
          <div className ="row-span-1 col-span-2 leading-none">
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
          <div className ="hidden lg:grid"></div>
          <details className ="col-span-2 lg:col-span-1 bg-gray-100/50">
          <summary>Youtubeで聴く</summary>
          <iframe className="w-full aspect-square" loading="lazy" src={`https://www.youtube.com/embed/`+song?.youtubeId + `?mute=1&modestbranding=1`} allow="fullscreen"></iframe>
          </details>
          <div>
          <YoutubeModal/>
 </div>
      </div>
    </section>
    )}
