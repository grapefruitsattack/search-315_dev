'use client'
import { useSearchParams } from 'next/navigation'
import type { SongMaster, SongInfo, Tabs } from '../../../../data/types';
import getTotalPage from '../../../common/utils/GetTotalPage';
import SearchSongForSingingInfoId from '../../../common/utils/SearchSongForSingingInfoId';
import CommonPage from "../../../../components/CommonPage";
import SongBlock from "../../../../components/SongBlock";
import Pagination from "../../../../components/Pagination";
import TabComponent from "../../../../components/TabComponent";
import { motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion";
import DisplayTypeSwitch from "./DisplayTypeSwitch";
import DisplayTypeToggle from "./DisplayTypeToggle";
import songInfoAsc from '../../../../data/songInfoAsc.json';
import songInfoDesc from '../../../../data/songInfoDesc.json';
import {SearchModal} from ".//SearchModal";

export default function SearchPageSong({ }: {}) {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
   
    const page :number = Number(searchParams.get('page')) || 1;
    const order :string = searchParams.get('order') || 'desc';
    const subscExists :number = Number(searchParams.get('subsc')) || 0;
    const colleFlg :number = Number(searchParams.get('colle')) || 0;

    const results: SongMaster[] 
      = SearchSongForSingingInfoId(search||[]
        ,order === 'asc' ? songInfoAsc : songInfoDesc
        ,subscExists
        ,colleFlg
      );

    const totalPage: number = getTotalPage(searchParams.get('page'),results.length,'search?search='+search);


    let displayResults = results != null
    ?results.slice(18*(page - 1),18*page):[];
    displayResults = displayResults != null ?displayResults :[];


    return (
      <>
      <section className="w-auto flex items-center justify-center">
      <SearchModal/>
      <div className="flex-none w-[16rem]">
        <DisplayTypeSwitch 
          currentValue={order}
          switchItems={[{label:'新しい順',id:'desc'},{label:'古い順',id:'asc'}]} 
          paramId ='order'
        />
      </div>
      <div className="flex-none w-[16rem]">
        <DisplayTypeToggle
          currentValue={subscExists}
          paramId ='subsc'
        />
      </div>
      <div className="flex-none w-[16rem]">
        <DisplayTypeToggle
          currentValue={colleFlg}
          paramId ='colle'
        />
      </div>
      </section>
        <section className="">
        <Pagination currentPage={page} totalPage={totalPage}/>
        </section>
  <AnimatePresence initial={false} mode="wait">
  <motion.div
       key={page + order  + `${subscExists}${colleFlg}${searchParams.get('search') === null?'':searchParams.get('search')}` }
    initial={{ opacity: 0 }} // 初期状態
    animate={{ opacity: 1 }} // マウント時
    exit={{ opacity: 0 }}    // アンマウント時
  >
        <section className="grid items-start px-12 lg:px-36 gap-4 grid-cols-1 lg:grid-cols-3 ">
    
            {displayResults.length===0 
            ? <div>結果なし</div>
            :displayResults.map((result, index) => (
            <SongBlock 
              key={index} 
              albumId={result.albumId} 
              trackNo={result.trackNo} 
              results={result}
            />
            ))}
        </section>

        </motion.div>
  </AnimatePresence>
        <section className=" pb-24">
        <Pagination currentPage={page} totalPage={totalPage}/>
        </section>
      </>
      );
}