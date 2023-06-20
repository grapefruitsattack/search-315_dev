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
import { motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion";

const cardVariant = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    inactive: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.5
      }
    }
  };
export default function SearchPageSong({ results }: {results :SongInfo[]}) {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
   
    const page :number = Number(searchParams.get('page')) || 1;

    const totalPage: number = getTotalPage(searchParams.get('page'),results.length,'search?search='+search);

    let displayResults = results != null
    ?results.slice(18*(page - 1),18*page):[];
    displayResults = displayResults != null ?displayResults :[];


    return (
      <>
        <section className="">
        <Pagination currentPage={page} totalPage={totalPage}/>
        </section>
  <AnimatePresence initial={false} mode="wait">
  <motion.div
       key={page + `${searchParams.get('search') === null?'':searchParams.get('search')}` }
    initial={{ opacity: 0 }} // 初期状態
    animate={{ opacity: 1 }} // マウント時
    exit={{ opacity: 0 }}    // アンマウント時
  >
        <section className="grid items-start pb-24 px-12 lg:px-36 gap-4 grid-cols-1 lg:grid-cols-3 ">
    
            {displayResults.length===0 
            ? <div>結果なし</div>
            :displayResults.map((result, index) => (
            <SongBlock key={index} albumId={result.albumId} trackNo={result.trackNo} />
            ))}
        </section>

        </motion.div>
  </AnimatePresence>
      </>
      );
}