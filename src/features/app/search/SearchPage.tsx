'use client'
import { useSearchParams } from 'next/navigation'
import CommonPage from "../../../components/CommonPage";
import TabComponent from "../../../components/TabComponent";
import SearchPageSong from "./components/SearchPageSong";
import {SearchModal} from "./components/SearchModal";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const search :string[] | undefined = searchParams.get('search')?.split(' ');
    const order :string = searchParams.get('order') || 'desc';

   


    return (
      <CommonPage>
      <section className="pt-24 bg-white ">
      <SearchModal/>
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