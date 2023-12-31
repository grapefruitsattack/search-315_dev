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


export const ShareSearchResultModal = (
  { title, pass }: { title: string, pass: string }
) => {
    //モーダル開閉
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>

        <motion.button className='rounded-lg border-2 border-gray-500 h-full
            text-gray-500 font-sans leading-tight
            hover:bg-blue-500 hover:text-blue-100 
            transition-all duration-500 ease-out w-full fill-gray-600 hover:fill-blue-100 
            p-1
            '
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.05 }}
          onClick={onOpen}>
        <div className='flex flex-row justify-center items-center '>
        <div className="mobileM:inline-block hidden font-bold mobileL:text-sm text-xs">検索結果<br/></div>
        <svg 
              className="
                icon icon-tabler icon-tabler-x 
                w-[24px] h-[24px] mobileM:w-[16px] mobileM:h-[16px] mobileL:w-[20px] mobileL:h-[20px]
              " 
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path></svg>

          {/* <div className="hidden lg:inline-block">シェア</div> */}
          
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
            <p className="text-xl font-bold text-gray-800">検索結果を共有</p>
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


      <div className="h-auto mx-4 px-4 rounded-xl">


        <div className=''>
        <ShareModuleContent 
              text={`${title}  |  サーチサイコー\n#SideM #search315`} 
              url={`https://search315.com/`+ pass}/>
      </div>
      </div>

      </ModalBody>
      </ModalContent>
     </Modal>
    </>
    );
};