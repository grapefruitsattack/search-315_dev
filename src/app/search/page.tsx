
import { Metadata } from 'next'
import dynamic from "next/dynamic";

const SearchPage = dynamic(() => import("../../features/app/search/SearchPage"), { ssr: false });
export const metadata: Metadata = {
  title: '検索結果 | サーチサイコー',
}
export default function Search() {
    return (
      <SearchPage />
    );
  }
