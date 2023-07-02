'use client'
import { useSearchParams } from 'next/navigation'
import CommonPage from "../../../components/CommonPage";
import TabComponent from "../../../components/TabComponent";
import SearchPageSong from "./components/SearchPageSong";
import {SearchModal} from "./components/SearchModal";

import {
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure, 
 } from "@chakra-ui/react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
    const order :string = searchParams.get('order') || 'desc';

   
 const { isOpen, onClose, onOpen } = useDisclosure();


    return (
      <CommonPage>
      <section className="pt-24 bg-white ">

      <div className='mb-5'>
      <SearchModal/>
      </div>
        <TabComponent 
        tabs = {[{
          title: 'song',
          id: 'song',
          icon: 'song',
          color: '',
          content: (<SearchPageSong />)
        },
        {
          title: 'album',
          id: 'album',
          icon: 'album',
          color: '',
          content: (<SearchModal/>)
        }]}
        />
    
    </section>
      </CommonPage>
      );
}