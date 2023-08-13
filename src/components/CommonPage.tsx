
import { Props } from "next/script";
import HeaderAndFooter from "./HeaderAndFooter";
import { AppProps } from "next/app";
import { useRouter } from "next/navigation"
import React from "react";
import useBuildId from "../features/common/utils/useBuildId"


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
    </main>
    );
  };
  
export default CommonPage;