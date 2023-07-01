'use client'
import { useModal } from "react-hooks-use-modal";
import { motion, AnimatePresence } from "framer-motion";

export const YoutubeModal = ({ id }: { id: string }) => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        focusTrapOptions : { 
        clickOutsideDeactivates : true
        },  
    });
    return (
        <>
        
        <motion.button className='rounded-lg border border-red-500 
            text-red-500 text-sm font-sans leading-tight
            hover:bg-red-200/50 w-full h-full
            transition-all duration-500 ease-out
            p-1'
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.05 }}
            onClick={open}>
            <div className='flex flex-wrap justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" 
            width="22" height="22" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
            <path d="M10 9l5 3l-5 3z"></path>
        </svg>
        <div>YouTube</div>
        </div>
        </motion.button>
        <Modal>
            <AnimatePresence mode="wait">
            <motion.div
                key={'modal'}    
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}    // アンマウント時
            >
      <div className="bg-white  rounded-md text-center">

        <div>
        <iframe 
            className="w-full aspect-square" loading="lazy" 
            src={`https://www.youtube.com/embed/`+ id + `?mute=1&modestbranding=1`} 
            allow="fullscreen">
        </iframe>

        </div>
        <button className="w-full" onClick={close}>CLOSE</button>
        </div>
            </motion.div>
            </AnimatePresence>
        </Modal>

    </>
    );
};