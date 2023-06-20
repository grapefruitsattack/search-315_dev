'use client'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import songInfo from '../../../data/songInfo.json';
import type { SongMaster, SongInfo, Tabs } from '../../../data/types';
import getTotalPage from '../../utils/GetTotalPage';
import SearchSongForSingingInfoId from '../../utils/SearchSongForSingingInfoId';
import CommonPage from "../../../components/CommonPage";
import SongBlock from "../../../components/SongBlock";
import Pagination from "../../../components/Pagination";
import TabComponent from "../../../components/TabComponent";
import SearchPageSong from "./SearchPageSong";
import { motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
    const results :SongInfo[] = SearchSongForSingingInfoId(search||[],songInfo);
   


    return (
      <CommonPage>
        <TabComponent 
        tabs = {[{
          title: 'song',
          id: 'song',
          icon: '',
          color: '',
          content: (<SearchPageSong results = {results}/>)
        },
        {
          title: 'album',
          id: 'album',
          icon: '',
          color: '',
          content: (<>結果なし</>)
        }]}
        />
    
      </CommonPage>
      );
}