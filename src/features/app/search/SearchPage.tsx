'use client'
import { useSearchParams } from 'next/navigation'
import CommonPage from "../../common/components/CommonPage";
import TabComponent from "../../common/components/TabComponent";
import SearchPageSong from "./components/SearchPageSong";
import SearchPageAlbum from "./components/SearchPageAlbum";
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
    const search :string[] | undefined = searchParams.get('q')?.split(' ');
    const order :string = searchParams.get('order') || 'desc';

   
 const { isOpen, onClose, onOpen } = useDisclosure();


    return (
      <CommonPage>
      <section className="pt-24 bg-white lg:max-w-[1500px] lg:m-auto">

      <div className='mb-5'>
      <SearchModal/>
      </div>
        <TabComponent 
        tabs = {[{
          title: 'song',
          id: 'song',
          icon: 'song',
          color: '',
          disabled:false,
          content: (<SearchPageSong />)
        },
        {
          title: 'album',
          id: 'album',
          icon: 'album',
          color: '',
          disabled:false,
          content: (<SearchPageAlbum/>)
        }]}
        />
    
    </section>
      </CommonPage>
      );
}