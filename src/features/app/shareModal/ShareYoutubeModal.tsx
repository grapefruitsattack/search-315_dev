'use client'
import { useModal } from "react-hooks-use-modal";
import { motion, AnimatePresence } from "framer-motion";
import YoutubeContent from "./components/YoutubeContent";

export const ShareYoutubeModal = (
  { id, title, artistName }: { id: string, title: string, artistName: string }
) => {
    //モーダル
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


      <div className="bg-gray-100  h-[70vh] w-[70vw] mx-4 p-4 rounded-xl lg:w-[50vw]">

        <div
          className="flex justify-between items center border-b border-gray-200 py-2"
        >
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold text-gray-800">共有</p>
          </div>

          <button
            className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={close}
          >
            x
          </button>
        </div>
        <YoutubeContent id ={id} title={title} artistName={artistName}/>
      </div>

            </motion.div>
            </AnimatePresence>
        </Modal>
        </div>
    </label>
    );
};