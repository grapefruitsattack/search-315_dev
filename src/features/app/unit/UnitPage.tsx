'use client'
import { useState } from "react";
import singingMaster from '../../../data/singingMaster.json';
import songMaster from '../../../data/songMaster.json';
import songInfoAsc from '../../../data/songInfoAsc.json'
import livePerformer from '../../../data/livePerformer.json'
import liveMaster from '../../../data/liveMaster.json'
import type { SongMaster, LiveMaster } from '../../../data/types';
import SongBlock from "../../common/components/SongBlock";
import CommonPage from "../../common/components/CommonPage";
import IdolBlock from "../../common/components/IdolBlock";
import {ShareSearch315Modal} from "../shareModal/ShareSearch315Modal";

interface ItemCSS extends React.CSSProperties{
  '--c':string
}

export default function IdolPage({ id }: { id: string }) {
  const unitName:string = singingMaster.find(data => data.singingInfoId === id)?.singingInfoName||'';
  const url = singingMaster.find(data => data.singingInfoId === id)?.url;
  const color = singingMaster.find(data => data.singingInfoId === id)?.color;
  const colorStr:string = color ===undefined ?'' : color;
  const style: ItemCSS = {
    "--c": '#'+colorStr
  };

  //ユニットメンバー取得
  const unitmember: string[] 
    = singingMaster.filter(data=>data.personFlg===1 && data.singingInfoId.substring(0, 3)===id.substring(0, 3))
    .map(data=>data.singingInfoId);

  //ユニット曲取得
  const unitSongInfos: string[] = songInfoAsc.filter(data => data.singingInfoId === id && data.type === 'u').map(data=>data.songId);
  const unitSongs: SongMaster[] 
    = unitSongInfos.map(songid=>songMaster.find(data=>songid===data.songId && data.isSoloColle === 0 && data.isUnitColle === 0))
    .filter((item): item is SongMaster => typeof item == 'object').slice().reverse();
  //合同系曲取得
  const collaboUnitInfos: string[] = songInfoAsc.filter(data => data.singingInfoId === id && data.type === 'c').map(data=>data.songId);
  const collaboSongs: SongMaster[] 
    = collaboUnitInfos.map(songid=>songMaster.find(data=>songid===data.songId))
    .filter((item): item is SongMaster => typeof item == 'object').slice().reverse();
  //カバー曲
  const coverSongInfos: string[] = songInfoAsc.filter(data => data.singingInfoId === id && data.type === 'cover').map(data=>data.songId);
  const coverSongs: SongMaster[] 
    = coverSongInfos.map(songid=>songMaster.find(data=>songid===data.songId))
    .filter((item): item is SongMaster => typeof item == 'object').slice().reverse();
  //ユニコレ・ユニットバージョン曲取得
  const unitVerSongInfos: string[] = songInfoAsc.filter(data => data.singingInfoId === id && data.type === 'uver').map(data=>data.songId);
  const unitVerSongs: SongMaster[] 
    = unitVerSongInfos.map(songid=>songMaster.find(data=>songid===data.songId && data.isSoloColle === 0))
    .filter((item): item is SongMaster => typeof item == 'object').slice().reverse();

  //ライブ情報
  const livePerIds: string[] = livePerformer.filter(data => data.singingInfoId === id).map(data=>data.livePerId);
  const liveInfos: LiveMaster[] 
  = livePerIds.map(livePerId=>liveMaster.find(data=>livePerId===data.livePerId))
  .filter((item): item is LiveMaster => typeof item == 'object').slice().reverse();

  const [isLiveOpen, setIsLiveOpen] = useState(true);

  return (
    <CommonPage>
    <p className={`after:bg-[#42DB42] after:bg-[#F14A4A] after:bg-[#87C010] after:bg-[#4757C9] after:bg-[#FFA90A] after:bg-[#CC313B] after:bg-[#1767D9] after:bg-[#24AA2C] after:bg-[#F6F45E] after:bg-[#A584E5] after:bg-[#225B9D] after:bg-[#26D4FF] after:bg-[#309AC1] after:bg-[#54BC26] after:bg-[#E86D85] after:bg-[#F7D828] after:bg-[#F4BA07] after:bg-[#3BA12E] after:bg-[#338033] after:bg-[#3696D0] after:bg-[#EF7A30] after:bg-[#7F9D1E] after:bg-[#7E31CC] after:bg-[#E7B12C] after:bg-[#834DBD] after:bg-[#4C8DD0] after:bg-[#FF0000] after:bg-[#EC7B23] after:bg-[#1B66CF] after:bg-[#25B1BC] after:bg-[#58C038] after:bg-[#BF48A7] after:bg-[#9FA5AB] after:bg-[#E13E33] after:bg-[#334ABA] after:bg-[#CC66CC] after:bg-[#D1594C] after:bg-[#12967F] after:bg-[#6664C6] after:bg-[#CD9D2F] after:bg-[#EB64A0] after:bg-[#FF99D6] after:bg-[#484393] after:bg-[#E44635] after:bg-[#F28198] after:bg-[#FF70E2] after:bg-[#3B6FBC] after:bg-[#E1B21F] after:bg-[#EE8D2B] after:bg-[#4A4A4A] after:bg-[#344DCB] after:bg-[#EE972F] after:bg-[#CB3546] after:bg-[#3D51FF] after:bg-[#59C13B] after:bg-[#E34238] after:bg-[#D2931B] after:bg-[#6880A0] after:bg-[#192F5D] after:bg-[#3A782E] after:bg-[#21A1B4] after:bg-[#00CCBB] after:bg-[#2A92CF] after:bg-[#91BE1C] after:bg-[#D03743] `}>
    </p>
    <article className="pt-32 pb-96 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-sans">
      {/* タイトル */}
      <div className={`
      relative 
      after:content-[' '] after:absolute after:right-[-10px] after:bottom-[-25%] w-fit
      mb-8
      after:bg-[#`+colorStr+`] after:w-full after:h-[35%] after:z-10`}>
      <p className={`
       tablet:text-5xl text-5xl
       font-semibold 
       z-20 relative
      `}>
      {unitName}
      </p>
      </div>

      {/* 詳細 */}
      <div className='
          grid grid-cols-2 mt-4 gap-y-[5px] 
          lg:w-1/2 
      '>
        <div 
            className={`
                lg:w-auto inline-block row-span-1 lg:pr-2 pr-1
            `}
        >
        <ShareSearch315Modal 
                title={unitName} 
                pass={'unit/'+id}
            />
        </div>
      </div>
      <div  className="w-fit
          pt-2 pb-8 lg:text-base text-sm font-sans break-all
          "
      >
          <p>公式サイトユニット紹介：
              <a 
              className ="
              underline 
              text-slate-400
              hover:text-sky-300 
              fill-slate-500
              hover:fill-sky-500 
              "
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              >
                  <span>
                  {url} 
                  <span className="pl-0.5">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                  </span>
              </a>
          </p>
      </div>
      <div 
          className="
              text-2xl font-mono flex items-center max-w-full mb-2
              after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
          "
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="currentColor"></path></svg>
          {'ユニットメンバー'}
      </div>
      <section className='mt-2 pb-8 grid text-center align-middle grid-cols-2 lg:mb-0 lg:grid-cols-3 gap-3 max-w-[900px]'>
      {unitmember.length===0 
            ? <div>結果なし</div>
            :unitmember.map((result, index) => (
            <IdolBlock 
            key={index}
            id={result} 
            />
            ))}
      </section>
      
      <div 
          className="
              text-2xl font-mono flex items-center w-full
              after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
          "
      >
          {'ユニット曲'}
      </div>
      <section className='mb-8 lg:min-h-[180px] min-h-[170px] rounded-lg bg-gradient-to-r from-indigo-50 to-emerald-50 overflow-x-scroll overflow-y-hidden flex flex-row flex-nowrap gap-x-2 items-center'>
      {unitSongs.length===0 
            ? <div>結果なし</div>
            :unitSongs.map((result, index) => (
            <div className='flex-none lg:w-[300px] w-[200px]' key={index} >
            <SongBlock 
              albumId={result.albumId} 
              trackNo={result.trackNo} 
              results={result}
              existsButton={false}
            />
            </div>
            ))}
      </section>
      <div 
          className="
              text-2xl font-mono flex items-center w-full
              after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
          "
      >
          {'ユニット合同曲'}
      </div>
      <section className='mb-8 lg:min-h-[180px] min-h-[170px] rounded-lg bg-gradient-to-r from-indigo-50 to-emerald-50 overflow-x-scroll overflow-y-hidden flex flex-row flex-nowrap gap-x-2 items-center'>
      {collaboSongs.length===0 
            ? <div>結果なし</div>
            :collaboSongs.map((result, index) => (
            <div className='flex-none lg:w-[300px] w-[200px]' key={index} >
            <SongBlock 
              albumId={result.albumId} 
              trackNo={result.trackNo} 
              results={result}
              existsButton={false}
            />
            </div>
            ))}
      </section>
      {coverSongs.length===0 
            ? <></>
            :<div 
          className="
              text-2xl font-mono flex items-center w-full
              after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
          "
      >
          {'カバー曲'}
      </div>
            }
      {coverSongs.length===0 
            ? <></>
            :<section className='mb-8 lg:min-h-[180px] min-h-[170px] rounded-lg bg-gradient-to-r from-indigo-50 to-emerald-50 overflow-x-scroll overflow-y-hidden flex flex-row flex-nowrap gap-x-2 items-center'>
            {
              coverSongs.map((result, index) => (
                <div className='flex-none lg:w-[300px] w-[200px]' key={index} >
                <SongBlock 
                  albumId={result.albumId} 
                  trackNo={result.trackNo} 
                  results={result}
                  existsButton={false}
                />
                </div>
                ))
            }</section>
            }

      <div 
          className="
              text-2xl font-mono flex items-center w-full
              after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
          "
      >
          {'ユニットVer'}
      </div>
      <section className='mb-8 lg:min-h-[180px] min-h-[170px] rounded-lg bg-gradient-to-r from-indigo-50 to-emerald-50 overflow-x-scroll overflow-y-hidden flex flex-row flex-nowrap gap-x-2 items-center'>
      {unitVerSongs.length===0 
            ? <div>結果なし</div>
            :unitVerSongs.map((result, index) => (
            <div className='flex-none lg:w-[300px] w-[200px]' key={index} >
            <SongBlock 
              albumId={result.albumId} 
              trackNo={result.trackNo} 
              results={result}
              existsButton={false}
            />
            </div>
            ))}
      </section>

{/* ライブ情報 */}
<div className="flex items-start">
      <a 
          className="
              text-2xl font-mono flex items-center w-full
              after:h-[0.5px] after:grow after:bg-slate-900/50 after:ml-[1rem] 
              cursor-pointer lg:cursor-auto 
          "
          onClick={()=>setIsLiveOpen(!isLiveOpen)}
      >
      {isLiveOpen
      ?<svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
      :<svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
      }
      <svg className="fill-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path></svg>
      {'出演ライブ'}
           {/* 注釈　PC版 */}
          <div className="ml-2 hidden lg:flex flex-wrap fill-red-600
          text-sm font-sans text-gray-900 bg-gray-200
          ">
          <span className="pr-1 text-red-500">
          <span className="">
          <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 24" width="18" height="18"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path></svg>
          </span>
          </span>
              <p className="w-fit">
                  {'ナンバリングライブ(1st～7th)、3Dライブ(ファンコンライブ)のみ対応。'}
              </p>
              <p className="w-max-[calc(100%_-_20px)]">
                  {'そのほかのライブは後日実装予定です'}
              </p>
          </div>
      </a>
      </div>
  <section className={`
      ${isLiveOpen?'lg:grid flex flex-col':'lg:grid hidden'}            
  `}>
  {/* 注釈　スマホ版 */}
  <div className="ml-2 lg:hidden flex flex-wrap fill-red-600
  text-sm font-sans text-gray-900 bg-gray-200
  ">
      <p className="w-fit bg-gray-200">
      <span className="pr-1 text-red-500">
          <span className="">
          <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 24" width="18" height="18"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path></svg>
          </span>
      </span>
          {'ナンバリングライブ(1st～7th)、3Dライブ(ファンコンライブ)のみ対応。'}
          {'そのほかのライブは後日実装予定です'}
      </p>
  </div>
  <div className={`grid
      grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2 pt-4
  `}>
  {liveInfos.map((result, index) => (
      <div key={index} className = "flex ">
          <a
          className ="
          rounded-md
          bg-white border-cyan-600/40 border-2
          py-1 w-full
          grid
          place-items-center
          lg:text-base text-sm p-0.5
          underline
          leading-tight
          font-sans
          rounded-md px-1 pt-1 
          from-cyan-100/30 to-violet-200/30
          text-cyan-900
          hover:bg-gradient-to-tl
          hover:text-cyan-700 
          duration-500 ease-out
          w-fit h-fit
          "
          href={`/live/` + result.livePerId}
          >
              <div className="flex flex-wrap place-content-center">
              <p className ='after:content-["\00A0"] text-center'>{result.displayLiveName+''}</p>
              <p className ="text-center">{result.displayPerName}</p>
              </div>
          </a>
      </div>
  ))}
  </div>
  </section>

    </article>

    </CommonPage>
    );
    }