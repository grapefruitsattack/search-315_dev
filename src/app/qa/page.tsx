
import { Metadata } from 'next'
import dynamic from "next/dynamic";

const QaPage = dynamic(() => import("../../features/app/qa/QaPage"), { ssr: false });

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return { title: `Q&A${'\u00a0'}|${'\u00a0\u00a0'}サーチサイコー` };
}
export default function Qa({ params }: { params: { id: string } }) {

  return (
    <QaPage />
  );
}