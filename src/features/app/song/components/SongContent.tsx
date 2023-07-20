'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import type { SongMaster,Albums,MvInfo } from '../../../../data/types';
import MvInfos from '../../../../data/mvInfo.json';
import OtherVersion from './OtherVersion'
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure, 
 } from "@chakra-ui/react";

export default function SongContent({ result, albumResult }: { result: SongMaster, albumResult: Albums }) {

    //MV情報取得
    const mvInfo : MvInfo | undefined 
        = MvInfos.find(data => data.songId === result.songId || data.songId === result.commonSong);
    
    const [openYoutube, setOpenYoutube] = useState(false);

    const { isOpen, onClose, onOpen } = useDisclosure();


    return(
        <article className="pt-24 py-24 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-mono">

        <section className="mt-5 mb-32 grid text-start align-middle lg:grid-cols-songPageLg grid-cols-1 lg:mb-0 gap-x-5">

            <motion.button 
                className={`
                    row-span-6 lg:w-auto w-[100%] 
                    ${openYoutube ? " hidden" : " lg:inline-block hidden "}
                `}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.05 }}
                onClick={() => {
                    setOpenYoutube(true);
                }}
            >
                {result.youtubeId===''
                ?
                <img 
                className={`object-cover object-center lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] rounded-lg`}
                src="https://placehold.jp/bdbdbd/ffffff/400x400.png?text=no%20image"
                alt="アートワーク"
                />
                :
                <img
                className={`object-cover object-center lg:h-[400px] lg:w-[400px] h-auto w-full max-w-[400px] aspect-square rounded-lg`}
                src={`https://img.youtube.com/vi/`+ result.youtubeId +`/maxresdefault.jpg`}
                alt="アートワーク"
                />
                }
            </motion.button >
            <div 
                className={`
                row-span-6 lg:w-auto w-[100%] 
                ${openYoutube ? " lg:inline-block hidden " : " hidden "}
            `}>
                <iframe 
                    className="w-full aspect-square" loading="lazy" 
                    src={`https://www.youtube.com/embed/`+ result.youtubeId + `?modestbranding=1`} 
                    allow="fullscreen">
                </iframe>
            </div>

            
            <button 
                className={`
                    row-span-6 lg:w-auto w-[100%] lg:hidden mb-4
                `}
                onClick={onOpen}
            >
                {result.youtubeId===''
                ?
                <img 
                className={`object-cover object-center lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] rounded-lg`}
                src="https://placehold.jp/bdbdbd/ffffff/400x400.png?text=no%20image"
                alt="アートワーク"
                />
                :
                <img
                className={`object-cover object-center lg:h-[400px] lg:w-[400px] h-auto w-full max-w-[350px] aspect-square rounded-lg`}
                src={`https://img.youtube.com/vi/`+ result.youtubeId +`/maxresdefault.jpg`}
                alt="アートワーク"
                />
                }
            </button >
            <Modal 
                isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent >
                <ModalBody>
                <div className="bg-white  rounded-md text-center">
                <iframe 
                    className="w-full aspect-square" loading="lazy" 
                    src={`https://www.youtube.com/embed/`+ result.youtubeId + `?mute=1&modestbranding=1`} 
                    allow="fullscreen">
                </iframe>
                <button className="w-full" onClick={onClose}>CLOSE</button>
                </div>
                </ModalBody>
                </ModalContent>
            </Modal>


            <div className="text-lg font-sans">
                {result.displayArtist}
            </div>
            <div className="text-3xl font-mono font-bold inline-block">
                {result.songTitle}
            </div>
            <div className="text-lg font-sans">
                <a 
                className ="hover:text-gray-500 underline "
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >{albumResult.albumTitleFull}
                </a>
            </div>
            <div className="text-base font-sans mt-5">
                {'リリースページ：'}
            </div>
            <div className="text-base font-sans">
                <a 
                className ="hover:text-gray-500 underline "
                href={albumResult.releasePage}
                target="_blank"
                rel="noopener noreferrer"
                >{albumResult.releasePage}
                </a>
            </div>
        </section>

        {/* MV */}
        {
        mvInfo === undefined
        ?<></>
        :<></>
        }

        {/* 他のバージョン */}
        {
        result.commonSong === ''
        ?<></>
        :<OtherVersion id={result.songId} commonSongId={result.commonSong}/>
        }


        </article>
    )
}