'use client'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import songInfo from '../../../data/songInfo.json';
import songInfoAsc from '../../../data/songInfoAsc.json';
import songInfoDesc from '../../../data/songInfoDesc.json';
import type { SongMaster, SongInfo, Tabs } from '../../../data/types';
import getTotalPage from '../../common/utils/GetTotalPage';
import SearchSongForSingingInfoId from '../../common/utils/SearchSongForSingingInfoId';
import CommonPage from "../../../components/CommonPage";
import SongBlock from "../../../components/SongBlock";
import Pagination from "../../../components/Pagination";
import TabComponent from "../../../components/TabComponent";
import SearchPageSong from "./components/SearchPageSong";
import {SearchModal} from "./components/SearchModal";
import { motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
    const order :string = searchParams.get('order') || 'desc';

   


    return (
      <CommonPage>
      <section className="pt-24 bg-white">

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