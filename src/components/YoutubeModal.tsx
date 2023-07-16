'use client'
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure, 
 } from "@chakra-ui/react";


export const YoutubeModal = ({ id }: { id: string }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
        
        <motion.button className='rounded-lg border border-red-500 
            text-red-500 text-sm font-sans leading-tight
            hover:bg-red-500 hover:text-red-100 
            w-full h-full
            transition-all duration-500 ease-out
            '
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.05 }}
            onClick={onOpen}>
            <div className='flex flex-wrap justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" 
            width="30" height="30" viewBox="0 2 22 20" strokeWidth="0.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
        </svg>
        </div>
        </motion.button>
        <Modal 
      isOpen={isOpen} onClose={onClose}
     >
       <ModalOverlay />
       <ModalContent >
      <ModalBody>

      <div className="bg-white  rounded-md text-center">

        <div>
        <iframe 
            className="w-full aspect-square" loading="lazy" 
            src={`https://www.youtube.com/embed/`+ id + `?mute=1&modestbranding=1`} 
            allow="fullscreen">
        </iframe>

        </div>
        <button className="w-full" onClick={onClose}>CLOSE</button>
        </div>
            </ModalBody>
      </ModalContent>
     </Modal>

    </>
    );
};