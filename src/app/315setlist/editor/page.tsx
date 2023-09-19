import { Metadata } from 'next'
import dynamic from "next/dynamic";

const EditorPage = dynamic(() => import("../../../features/app/315setlist/EditorPage"), { ssr: false });

export async function generateMetadata({ }: { }): Promise<Metadata> {
  return { title: `エディター ${'\u00a0'}|${'\u00a0\u00a0'}サイコーセットリスト` };
}

export default function Editor({ params }: { params: { id: string } }) {

    return (
      <EditorPage />
    );
  }