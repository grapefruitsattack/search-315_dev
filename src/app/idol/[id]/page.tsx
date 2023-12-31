
import songMaster from '../../../data/singingMaster.json';
import dynamic from "next/dynamic";

export function generateStaticParams() {
  const idols = songMaster.filter(data=>data.personFlg===1);
  return idols.map((e)=>{
    return {id: e.singingInfoId}
  });
  }
  const IdolPage = dynamic(() => import("../../../features/app/idol/IdolPage"), { ssr: false });
  export default function Page({ params }: { params: { id: string } }) {

    return (
      <IdolPage id = {params.id} />
      );
    }