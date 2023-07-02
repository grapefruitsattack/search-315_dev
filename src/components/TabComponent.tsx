'use client'
import React, { useState } from "react";
import type { Tabs } from '../data/types';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion";

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
};
export default function TabComponent  ({ tabs }: { tabs: Tabs[] }) {
    const router = useRouter();
    const params = new URLSearchParams(useSearchParams().toString());
    const initTab: Tabs = tabs.find((data)=>data.id === params.get('tab'))||tabs[0];
    
    const currentPath: string = usePathname();

    const [activeTab, setActiveTab] = useState(initTab);


	return (
    
    <>
    <div className="flex space-x-1 w-[85vw] justify-start m-auto">
          {tabs.map((tab,index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab);
                params.set('tab',tab.id);
                params.delete('page');
                router.push(currentPath + '?'  + params.toString());
              }}
              className={`font-sans text-base lg:text-xl ${
                  activeTab.id === tab.id ? " text-pink-700/70 " : " hover:text-slate-800/60 "
                } relative rounded-full px-3 py-1.5 lg:min-w-[150px] h-12
                text-lg font-medium text-slate-800 
                outline-sky-400 transition focus-visible:outline-2
              `}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
            {activeTab.id === tab.id && (
              <motion.span
                key={tab.id}
                layoutId="bubble"
                className="absolute inset-x-0 bottom-0 z-10 
                bg-gradient-to-r from-pink-300 via-purple-300 to-sky-200
                h-2"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              )}
              <div className='z-20'>
              <div className='flex flex-wrap justify-center items-center'>
              {tab.icon === 'song' &&(
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M9 17l0 -13l10 0l0 13"></path>
                <path d="M9 8l10 0"></path>
              </svg>
              )}
              {tab.icon === 'album' &&(
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-disc" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M7 12a5 5 0 0 1 5 -5"></path>
                <path d="M12 17a5 5 0 0 0 5 -5"></path>
              </svg>
              )}
              {tab.icon === 'live' &&(
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-microphone-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9"></path>
                <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z"></path>
              </svg>
              )}
                <div>{tab.title}</div>
                </div>
              
              </div>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
          <div>{activeTab.content}</div>
        </motion.div>
        </AnimatePresence>
        </>
    );
}