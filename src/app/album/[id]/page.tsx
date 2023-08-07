
import { Metadata } from 'next'
import albumMaster from '../../../data/albumMaster.json';
import dynamic from "next/dynamic";

const AlbumPage = dynamic(() => import("../../../features/app/album/AlbumPage"), { ssr: false });

export function generateStaticParams() {
  // return [
  //   { id: "SL01_1" },
  //   { id: "SL01_3" },
  //   { id: "SL01_5" },
  //   { id: "SL02_1" },
  // ];
  return albumMaster.map((e)=>{
    return {id: e.albumId}
  });
}
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const albumTitleFull: string = albumMaster.find((data)=>data.albumId === params.id)?.albumTitleFull||'';
  return { title: `${albumTitleFull} ${'\u00a0'}|${'\u00a0\u00a0'}サーチサイコー` };
}
export default function Songs({ params }: { params: { id: string } }) {

  return (
    <AlbumPage albumId={params.id} />
  );
}