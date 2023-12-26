
import { Props } from "next/script";
import HeaderAndFooter from "./HeaderAndFooter";
import { AppProps } from "next/app";
import { useRouter } from "next/navigation"
import React from "react";
import useBuildId from "../utils/useBuildId"
import Link from 'next/link';
import ParticlesComponent from './particles';


const CommonPage = ({ children }: Props ,{ Component, pageProps, router }: AppProps)=> {
  const { shouldReload } = useBuildId();
  const nextrouter = useRouter();
  
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (shouldReload()) {
        console.log('reload');
        nextrouter.refresh();
      }
    }

  }, [shouldReload])

    return (
    <main className=" min-h-screen">
        <HeaderAndFooter />
        <>{children}</>
        <ParticlesComponent/>
        <Link 
          className="flex pb-2 justify-center underline text-gray-600 mobileL:text-base mobileM:text-sm text-xs"
          href={`/about`}
          rel="noopener noreferrer"
        >このサイトについて・プライバシーポリシー・免責事項</Link>

    </main>
    );
  };
  
export default CommonPage;