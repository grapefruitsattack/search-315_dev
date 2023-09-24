'use client'
import { useState, useEffect } from "react";
import {SearchParams} from '../../class/SearchParams';
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure, 
 } from "@chakra-ui/react";
 import PplSelectContents from './PplSelectContents';


export default function SelectDataModal ({}:{}) {
    //モーダル開閉
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [searchParams, setSearchParams] = useState(new SearchParams());
    const [isDisplayedResult, setIsDisplayedResult] = useState(false);

    function changePplState(pplState: string[]){
      setSearchParams({...searchParams,singingInfos:pplState});
      console.log(searchParams.singingInfos)
    };

    //モーダル開閉処理
    function openModal() {
      //ダミー履歴を挿入
      history.pushState(null, '', null);
      window.addEventListener('popstate', onClose, false);
      onOpen();
    };
    function closeModal() {
      window.removeEventListener("popstate", onClose);
      history.back();
      onClose();
    };
    
    //検索結果切替処理
    function setIsDisplayedResultFalse(){
      setIsDisplayedResult(false);
    }
    function displaySearchResult() {
      //ダミー履歴を挿入
      history.pushState(null, '', null);
      window.addEventListener('popstate', setIsDisplayedResultFalse, false);
      setIsDisplayedResult(true);
    };
    function hiddenSearchResult() {
      window.removeEventListener("popstate", setIsDisplayedResultFalse);
      history.back();
      setIsDisplayedResult(false);
    };

    return(
    <>
    <button 
        className='flex justify-center px-2'
        onClick={() => {
          openModal();
        }}
    >
        open
    </button>
    <Modal 
        isOpen={isOpen} onClose={closeModal} size={'full'}
        scrollBehavior={'inside'}
     >
    <ModalOverlay />
        <ModalContent >
        <ModalHeader>
       <div
          className="flex justify-between items center border-b border-gray-200 py-2"
        >
          <div className="flex items-center justify-center">
            <p className="mobileL:text-xl text-base font-bold text-gray-800">タイトル</p>
          </div>

          <button
            className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={closeModal}
          >
            <svg 
              className="icon icon-tabler icon-tabler-x"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
          </button>
        </div>
        </ModalHeader>
        <ModalBody>
          <section className={`${isDisplayedResult?'hidden':''}`}>
          {searchParams.singingInfos.length===0?'':'seletcted'}
          <PplSelectContents changeSearchParams={changePplState}/>
          </section>
          <section className={`${isDisplayedResult?'':'hidden'}`}>
          {searchParams.singingInfos.join(',')}
          </section>
        </ModalBody>
        <ModalHeader>
          <button
            className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            onClick={displaySearchResult}
          >
            検索</button>
        </ModalHeader>
        </ModalContent>
        </Modal>
        </>
    )
}