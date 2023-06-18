
import { Props } from "next/script";
import HeaderAndFooter from "./HeaderAndFooter";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import React from "react";


const CommonPage = ({ children }: Props ,{ Component, pageProps, router }: AppProps)=> {
    return (
    <main className=" min-h-screen">
        <HeaderAndFooter />
        <>{children}</>
    </main>
    );
  };
  
export default CommonPage;