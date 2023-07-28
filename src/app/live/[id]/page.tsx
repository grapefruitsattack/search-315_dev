
import liveMaster from '../../../data/liveMaster.json';
import dynamic from "next/dynamic";

const LivePage = dynamic(() => import("../../../features/app/live/LivePage"), { ssr: false });

export function generateStaticParams() {
  // return [
  //   { id: "SL01_1" },
  //   { id: "SL01_3" },
  //   { id: "SL01_5" },
  //   { id: "SL02_1" },
  // ];
  return liveMaster.map((e)=>{
    return {id: e.livePerId}
  });
}
export default function Songs({ params }: { params: { id: string } }) {

  return (
    <LivePage livePerId={params.id} />
  );
}