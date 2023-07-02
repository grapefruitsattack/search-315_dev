'use client'
import { useSearchParams } from 'next/navigation'
import CommonPage from "../../../components/CommonPage";
import TabComponent from "../../../components/TabComponent";
import SearchPageSong from "./components/SearchPageSong";
import {SearchModal} from "./components/SearchModal";
import {SearchModalContent} from "./components/SearchModalContent";

import {
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure, //utility hooks の一つ
 } from "@chakra-ui/react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
    const order :string = searchParams.get('order') || 'desc';

   
 const { isOpen, onClose, onOpen } = useDisclosure();


    return (
      <CommonPage>
      <section className="pt-24 bg-white ">

      <SearchModal/>
      <Button onClick={onOpen}>モーダル</Button>
     <Modal 
      isOpen={isOpen} onClose={onClose}
      scrollBehavior={'inside'}
     >
       <ModalOverlay />
       <ModalContent maxW="80vw" maxH="80vh">
         <ModalHeader></ModalHeader>
         <ModalBody pb='1.5rem'>
           <SearchModalContent/>
         </ModalBody>
       </ModalContent>
     </Modal>

        <TabComponent 
        tabs = {[{
          title: 'song',
          id: 'song',
          icon: '',
          color: '',
          content: (<SearchPageSong />)
        },
        {
          title: 'album',
          id: 'album',
          icon: '',
          color: '',
          content: (<SearchModal/>)
        }]}
        />
    
    </section>
      </CommonPage>
      );
}