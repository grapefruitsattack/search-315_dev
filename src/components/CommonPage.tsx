
import { Props } from "next/script";
import HeaderAndFooter from "./HeaderAndFooter";
import { AppProps } from "next/app";
import { NextRouter, useRouter } from "next/router"
import { AnimatePresence } from "framer-motion";
import React from "react";
import useBuildId from "../features/common/utils/useBuildId"


const CommonPage = ({ children }: Props ,{ Component, pageProps, router }: AppProps)=> {
  const { shouldReload } = useBuildId();
  const nextrouter: NextRouter = useRouter();
  
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (shouldReload()) {
        document.location.reload()
      }
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      console.log('reload')
      router.events.off("routeChangeComplete", handleRouteChange)
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