import type { SongMaster } from '../data/types';
import songMasters from '../data/songMaster.json';

export default function SongBlock({ albumId,trackNo }: { albumId: string, trackNo: number}) {
  const song = songMasters.find(data => data.albumId === albumId && data.trackNo === trackNo);

    return (
        

        <main
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors
          bg-gray-100/20 "
        >
          <p className={`flex flex-wrap`}>

          <a 
            className={`w-full m-0 text-sm opacity-90 hover:bg-blue-500`}
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

          >
          Album名
          </a>
          <a 
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
            className={`group w-full mb-0 text-2xl font-semibold break-all bg-blue-200/50 hover:bg-blue-200`}>
          {song?.songTitle}
           <p className={`invisible
          absolute px-2 rounded text-[12px] font-bold text-white p-1 bg-slate-600
           group-hover:visible`}>
          曲詳細へ移動
          </p> *
          </a>
          
          <p className={`w-full m-0 text-sm opacity-90`}>
          {song?.displayArtist}
          </p>
          <p className={`w-full m-0 text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
          <p className={`w-full cursor-pointer hover:text-red-500`}>
          <details className="w-10">
          <summary>Youtubeで聴く</summary>
          <iframe className="aspect-w-10 aspect-h-10" loading="lazy" src={`https://www.youtube.com/embed/`+song?.youtubeId}></iframe>
          </details>
          </p>
          </p>
        </main>
    )}
