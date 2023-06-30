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
              className={`${
                  activeTab.id === tab.id ? "" : "hover:text-blue-800/60 "
                } relative rounded-full px-3 py-1.5 
                text-xs lg:text-lg font-medium text-blue-900 
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
                className="absolute inset-0 z-10 bg-teal-300/50 mix-blend-multiply"
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