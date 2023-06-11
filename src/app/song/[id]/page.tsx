
import songInfos from '../../../data/songInfo.json';
import type { SongMaster, SongInfo } from '../../../data/types';
import HeaderAndFooter from "../../../components/HeaderAndFooter";
import SongBlock from "../../../components/SongBlock";

export function generateStaticParams() {
    return [
      { id: "SL01_1" },
      { id: "SL01_3" },
      { id: "SL01_5" },
      { id: "SL02_1" },
    ];
  }
  export default function Songs({ params }: { params: { id: string } }) {

      const results : SongInfo[] = songInfos.filter(data => data.singingInfoId === params.id);
      return (
        
    <main className=" min-h-screen">
    <HeaderAndFooter />
    <section className="grid items-start py-24 px-12 lg:px-36 gap-4 grid-cols-1 lg:grid-cols-3 ">
        {params.id}
    </section>
    </main>
      );
    }