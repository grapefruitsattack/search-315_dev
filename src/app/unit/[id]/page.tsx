
import songMaster from '../../../data/singingMaster.json';
import dynamic from "next/dynamic";

export function generateStaticParams() {
  const idols = songMaster.filter(data=>data.personFlg===0);
  return idols.map((e)=>{
    return {id: e.singingInfoId}
  });
  }
  const UnitPage = dynamic(() => import("../../../features/app/unit/UnitPage"), { ssr: false });
  export default function Page({ params }: { params: { id: string } }) {

    return (
      <UnitPage id = {params.id} />
      );
    }