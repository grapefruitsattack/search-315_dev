'use client'
import { useModal } from "react-hooks-use-modal";
import { motion, AnimatePresence } from "framer-motion";

export const YoutubeModal: React.VFC = () => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        focusTrapOptions : { 
        clickOutsideDeactivates : true
        },  
    });
    return (
        <label className={"flex items-center relative w-max cursor-pointer select-none"}>
        <div>
        <button onClick={open}>OPEN</button>
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
          <iframe className="w-full aspect-square" loading="lazy" src={`https://www.youtube.com/embed/4o9vgvAa1bQ` + `?mute=1&modestbranding=1`} allow="fullscreen"></iframe>

          </div>
          <button className="w-full" onClick={close}>CLOSE</button>
        </div>
            </motion.div>
            </AnimatePresence>
        </Modal>
        </div>
    </label>
    );
};