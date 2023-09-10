'use client'
import React, { useState } from "react";
import type { Tabs } from '../../../data/types';
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
                  activeTab.id === tab.id 
                  ? " text-pink-700/70 fill-pink-700/70 " 
                  : " hover:text-slate-800/60 hover:fill-slate-800/60"
                } relative rounded-full px-3 py-1.5 lg:min-w-[150px] h-12
                text-lg font-medium 
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20 3V17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17C12 14.7909 13.7909 13 16 13C16.7286 13 17.4117 13.1948 18 13.5351V5H9V17C9 19.2091 7.20914 21 5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C5.72857 13 6.41165 13.1948 7 13.5351V3H20ZM5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19ZM16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z"></path></svg>
              )}
              {tab.icon === 'album' &&(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 16C14.2133 16 16 14.2133 16 12C16 9.78667 14.2133 8 12 8C9.78667 8 8 9.78667 8 12C8 14.2133 9.78667 16 12 16ZM12 11C12.55 11 13 11.45 13 12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11Z"></path></svg>
              )}
              {tab.icon === 'live' &&(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path></svg>
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