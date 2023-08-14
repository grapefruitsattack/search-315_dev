
import { Metadata } from 'next'
import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("../../features/app/about/AboutPage"), { ssr: false });

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return { title: `サイトについて${'\u00a0'}|${'\u00a0\u00a0'}サーチサイコー` };
}
export default function Songs({ params }: { params: { id: string } }) {

  return (
    <AboutPage />
  );
}