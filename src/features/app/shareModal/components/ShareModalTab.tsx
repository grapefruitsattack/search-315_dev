'use client'
import React, { useState } from "react";
import type { Tabs } from '../../../../data/types';
import { useSearchParams } from 'next/navigation'
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
export default function ShareModalTab  ({ tabs }: { tabs: Tabs[] }) {
    const params = new URLSearchParams(useSearchParams().toString());
    const initTab: Tabs = tabs.find((data)=>data.id === params.get('tab'))||tabs[0];
    

    const [activeTab, setActiveTab] = useState(initTab);


	return (
    
    <>
    <div className="flex items-center justify-center">
          {tabs.map((tab,index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`font-sans text-base lg:text-xl ${
                activeTab.id === tab.id ? " text-pink-400 " : " hover:text-slate-800/60 "
              } relative rounded-full px-3 py-1.5 lg:min-w-[150px] h-12
              text-lg font-medium text-slate-800 
              outline-sky-400 transition focus-visible:outline-2
            `}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
            >
            {activeTab.id === tab.id && (
        <AnimatePresence mode="wait">
              <motion.span
                key='ShareModalTab'
                layoutId="bubbleShareModalTab"
                className="absolute inset-x-0 bottom-0 z-10 
                bg-gradient-to-r from-pink-300 via-purple-300 to-sky-200
                h-2"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              </AnimatePresence>
              )}
              <div>
              {tab.title}
              </div>
            </button>
          ))}
          </div>
        <AnimatePresence mode="wait">
          <div
            key={activeTab.id}
          >
          <div>{activeTab.content}</div>
        </div>
        </AnimatePresence>
        </>
    );
}