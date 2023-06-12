
import dynamic from "next/dynamic";

export function generateStaticParams() {
    return [
      { id: "JUP00" },
      { id: "JUP01" },
      { id: "JUP02" },
      { id: "JUP03" },
    ];
  }
  const IdolPage = dynamic(() => import("../../../features/idol/IdolPage"), { ssr: false });
  export default function Page({ params }: { params: { id: string } }) {

    return (
      <IdolPage id = {params.id} />
      );
    }