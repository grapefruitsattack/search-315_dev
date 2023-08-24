'use client'
import { getSubscUrl, getYoutubeUrl } from '../utils/SubscUtils'
import { useSubscService } from '../hooks/useSubscService'
import subscSongs from '../../../data/subscSongs.json';
import subscAlbums from '../../../data/subscAlbums.json';
import type { SubscUrls } from '../../../data/types';
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure, 
 } from "@chakra-ui/react";
import { YoutubeModal } from '@/components/YoutubeModal';

 const subscServiceNames: {
  id: string;
  name: string;
  nameSub: string;
}[]=[
  {id:'youtube',name:'YTMusic',nameSub:''}
  ,{id:'amazon',name:'Amazon',nameSub:'\u00a0Music'}
  ,{id:'line',name:'Line',nameSub:'\u00a0Music'}
  ,{id:'apple',name:'Apple',nameSub:'\u00a0Music'}
  ,{id:'spotify',name:'Spotify',nameSub:''}
  ,{id:'awa',name:'AWA',nameSub:''}
  ,{id:'towerrecord',name:'タワレコ',nameSub:'\u00a0Music'}
]

const STORAGE_SUBSC_SERVICE = 'subscService';

export default function SubscButton(
    { songId, albumId, youtubeId }: { songId: string, albumId: string, youtubeId: string}
  ) {
    //ローカルストレージ
    const [subscService, setSubscService] = useSubscService('youtube');
    //モーダル
    const { isOpen, onClose, onOpen } = useDisclosure();
    //サブスクURL一覧取得
    const subscUrl: SubscUrls | undefined
      = songId!==''
        ?subscSongs.find(data=>data.id===songId)
        :subscAlbums.find(data=>data.id===albumId);
    //デフォルト表示用サブスクサービス
    const href: string = getSubscUrl(songId,albumId,youtubeId,localStorage.getItem(STORAGE_SUBSC_SERVICE) || 'youtube');
    const subscServiceName: string = href===''
      ?subscServiceNames[0].name
      :subscServiceNames.find((data)=>data.id===localStorage.getItem(STORAGE_SUBSC_SERVICE) || '')?.name||subscServiceNames[0].name;
    const subscServiceNameSub: string = href===''
      ?subscServiceNames[0].nameSub
      :subscServiceNames.find((data)=>data.id===localStorage.getItem(STORAGE_SUBSC_SERVICE) || '')?.nameSub||subscServiceNames[0].nameSub;


    return(
    <div className="grid grid-cols-[4fr_2fr] divide-x">
    <a className="w-full h-full"
    href={href===''?getYoutubeUrl(songId,albumId,youtubeId):href}
    target="_blank" rel="noopener noreferrer">
    <motion.button
        className='rounded-l-lg border-t-2 border-l-2 border-b-2 border-orange-500 w-full h-[43px]
        text-orange-500 font-sans leading-tight
        hover:bg-orange-500 hover:text-orange-100 
        transition-all duration-500 ease-out
        fill-orange-500 hover:fill-orange-100 
        text-xs mobileM:text-base lg:text-lg
        '
        type="button"
        aria-controls="contents"
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.05 }}
    >
        <div className='
            flex flex-wrap justify-center font-sans font-black 
            tracking-tighter inline-block leading-none
        '>
            <span className="">
            {subscServiceName}
            </span>
            <span className="">
            {subscServiceNameSub}
            <svg className="inline-block mobileL:w-[18px] w-[14px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
            </span>
        </div>
    </motion.button>
    </a>
    <motion.button
        className='rounded-r-lg border-2 bg-orange-500 border-orange-500 w-full h-[43px] fill-white flex justify-center items-center'
        onClick={onOpen}
    >
        <div className='' >

        <svg className='w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>
        </div>
    </motion.button>

    <Modal 
        isOpen={isOpen} onClose={onClose}
     >
    <ModalOverlay />
        <ModalContent minW="50vw" w="calc(100vw - 20px - 4rem)">
        <ModalHeader>
       <div
          className="flex justify-between items center border-b border-gray-200 py-2"
        >
          <div className="flex items-center justify-center">
            <p className="mobileL:text-xl text-base font-bold text-gray-800">サブスクサービスを選択</p>
          </div>

          <button
            className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={onClose}
          >
            <svg 
              className="icon icon-tabler icon-tabler-x"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
          </button>
        </div>
        </ModalHeader>
        <ModalBody>
          <div className='grid gap-2 pb-2'>
            {/* Amazon Music */}
            <a 
              className={`${subscUrl===undefined||subscUrl.amazonMusicUrl===''?'hidden':''}
                w-full inline-block drop-shadow rounded
                py-2 px-4 bg-[#41CDD8] text-black font-bold
               `}
              href={subscUrl?.amazonMusicUrl}
              target="_blank" rel="noopener noreferrer"
              onClick={()=>{
                setSubscService('amazon');
                onClose();
              }}>
                <p>
                  Amazon Music
                  <span className="fill-blue-900">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                </p>
            </a>
            {/* youtube Music */}
            <a 
              className={`
                w-full inline-block drop-shadow rounded
                py-2 px-4 bg-red-500 text-white fill-white font-bold
               `}
              href={getYoutubeUrl(songId,albumId,youtubeId)}
              target="_blank" rel="noopener noreferrer"
              onClick={()=>{
                setSubscService('youtube');
                onClose();
              }}>
                <p>
                  YouTube Music
                  <span className="">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                </p>
            </a>
            {/* LineMusic */}
            <a 
              className={`${subscUrl===undefined||subscUrl.lineMusicUrl===''?'hidden':''}
                w-full inline-block drop-shadow rounded
                py-2 px-4 bg-[#09D16B] text-white fill-white font-bold
               `}
              href={subscUrl?.lineMusicUrl}
              target="_blank" rel="noopener noreferrer"
              onClick={()=>{
                setSubscService('line');
                onClose();
              }}>
                <p>
                  Line Music
                  <span className="">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                </p>
            </a>
            {/* Apple Music */}
            <a 
              className={`${subscUrl===undefined||subscUrl.appleMusicUrl===''?'hidden':''}
                w-full inline-block drop-shadow rounded
                py-2 px-4 bg-[#FB445C] text-white fill-white font-bold
               `}
              href={subscUrl?.appleMusicUrl}
              target="_blank" rel="noopener noreferrer"
              onClick={()=>{
                setSubscService('apple');
                onClose();
              }}>
                <p>
                Apple Music
                  <span className="">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                </p>
            </a>
            {/* spotify */}
            <a 
              className={`${subscUrl===undefined||subscUrl.spotifyUrl===''?'hidden':''}
                w-full inline-block drop-shadow rounded
                py-2 px-4 bg-[#24CF5F] text-white fill-white font-bold
               `}
              href={subscUrl?.spotifyUrl}
              target="_blank" rel="noopener noreferrer"
              onClick={()=>{
                setSubscService('spotify');
                onClose();
              }}>
                <p>
                Spotify
                  <span className="">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                </p>
            </a>
            {/* AWA */}
            <a 
              className={`${subscUrl===undefined||subscUrl.awaUrl===''?'hidden':''}
                w-full inline-block drop-shadow rounded
                py-2 px-4 bg-black text-white fill-white font-bold
               `}
              href={subscUrl?.awaUrl}
              target="_blank" rel="noopener noreferrer"
              onClick={()=>{
                setSubscService('awa');
                onClose();
              }}>
                <p>
                AWA
                  <span className="">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                </p>
            </a>
            {/* タワレコ */}
            <a 
              className={`${subscUrl===undefined||subscUrl.towerRecordsMusic===''?'hidden':''}
                w-full inline-block drop-shadow rounded
                py-2 px-4 bg-[#FDD000] text-red-600 fill-red-600 font-bold
               `}
              href={subscUrl?.towerRecordsMusic}
              target="_blank" rel="noopener noreferrer"
              onClick={()=>{
                setSubscService('towerrecord');
                onClose();
              }}>
                <p>
                TOWER RECORDS MUSIC
                  <span className="">
                  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
                  </span>
                </p>
            </a>
            </div>
        </ModalBody>
        </ModalContent>
    </Modal>

    </div>
    )
  }