'use client'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import songInfo from '../../../data/songInfo.json';
import type { SongMaster, SongInfo } from '../../../data/types';
import getTotalPage from '../../utils/GetTotalPage';
import HeaderAndFooter from "../../../components/HeaderAndFooter";
import SongBlock from "../../../components/SongBlock";
import Pagination from "../../../components/Pagination";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
    console.log(searchParams.get('search'))
    const page :number = Number(searchParams.get('page')) || 1;
    const results = songInfo.filter(data => search?.includes(data.singingInfoId));

    const totalPage: number = getTotalPage(searchParams.get('page'),results.length,'search?search='+search);

    const displayResults : SongInfo[] = results.slice(18*(page - 1),18*page);

    return (
        <main className="min-h-screen">
        <HeaderAndFooter />
        <section className="pt-24">
        <Pagination currentPage={page} totalPage={totalPage}/>
        </section>
        <section className="grid items-start pb-24 px-12 lg:px-36 gap-4 grid-cols-1 lg:grid-cols-3 ">
    
            {displayResults.length===0 
            ? <div>結果なし</div>
            :displayResults.map((result) => (
            <SongBlock key={result.albumId + result.trackNo} albumId={result.albumId} trackNo={result.trackNo} />
            ))}
        </section>
        </main>
      );
}