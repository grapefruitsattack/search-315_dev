
import songInfos from '../../data/songInfo.json';
import type { SongMaster, SongInfo } from '../../data/types';
import HeaderAndFooter from "../../components/HeaderAndFooter";
import SongBlock from "../../components/SongBlock";

export function generateStaticParams() {
    return [
      { id: "JUP00" },
      { id: "JUP01" },
      { id: "JUP02" },
      { id: "JUP03" },
    ];
  }
  export default function Songs({ params }: { params: { id: string } }) {

      const results : SongInfo[] = songInfos.filter(data => data.singingInfoId === params.id);
      return (
        
    <main className=" min-h-screen">
    <HeaderAndFooter />
    <section className="grid items-start py-24 px-12 lg:px-36 gap-4 grid-cols-1 lg:grid-cols-3 ">
        



        {results.map((result) => (

<SongBlock key={result.albumId + result.trackNo} albumId={result.albumId} trackNo={result.trackNo} />
))}
        </section>
    </main>
      );
    }