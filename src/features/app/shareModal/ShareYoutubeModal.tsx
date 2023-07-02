'use client'
import { useModal } from "react-hooks-use-modal";
import { motion, AnimatePresence } from "framer-motion";
import ShareModuleContent from "./components/ShareModuleContent";
import ShareModalTab from "./components/ShareModalTab";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure, 
 } from "@chakra-ui/react";


export const ShareYoutubeModal = (
  { youtubeId, title, artistName, songId }: { youtubeId: string, title: string, artistName: string, songId: string }
) => {
    //モーダル


    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>

        <motion.button className='rounded-lg border border-blue-500 
            text-blue-500 text-sm font-sans leading-tight
            hover:bg-blue-200/50
            transition-all duration-500 ease-out
            p-1'
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.05 }}
          onClick={onOpen}>
        <div className='flex flex-wrap justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-share-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"></path>
          </svg>
          <div>シェア</div>
        </div>
        </motion.button >

     <Modal 
      isOpen={isOpen} onClose={onClose}
     >
       <ModalOverlay />
       <ModalContent minW="50vw" w="calc(100vw - 20px - 2rem)">
       <ModalHeader>
       <div
          className="flex justify-between items center border-b border-gray-200 py-2"
        >
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold text-gray-800">共有</p>
          </div>

          <button
            className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={onClose}
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
          </button>
        </div>
       </ModalHeader>
      <ModalBody>


      <div className="h-auto mx-4 p-4 rounded-xl">


        <div className=''>
        <ShareModalTab 
        tabs = {[{
          title: 'YouTube',
          id: 'YouTube',
          icon: '',
          color: '',
          content: (
            <ShareModuleContent 
              text={`${title} ${artistName.trim() === '' ? '': '- ' + artistName}  |  YouTube\n#SideM #search315`} 
              url={`https://youtu.be/`+ youtubeId}/>
            )
        },
        // {
        //   title: 'YouTubeMusic',
        //   id: 'YouTubeMusic',
        //   icon: '',
        //   color: '',
        //   content: (
        //     <ShareModuleContent 
        //       text={`${title} ${artistName.trim() === '' ? '': '- ' + artistName}  |  YouTube Music\n#SideM #search315`} 
        //       url={`https://music.youtube.com/watch?v=`+ youtubeId}/>
        //     )
        // },
        {
          title: 'サーチ315',
          id: 'サーチ315',
          icon: '',
          color: '',
          content: (
            <ShareModuleContent 
              text={`${title} ${artistName.trim() === '' ? '': '- ' + artistName}  |  サーチ315\n#SideM #search315`} 
              url={`https://search315.com/song/`+ songId}/>
            )
        },
        ]}
        />
      </div>
      </div>

      </ModalBody>
      </ModalContent>
     </Modal>
    </>
    );
};