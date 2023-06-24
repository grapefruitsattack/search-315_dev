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
    <div className="flex space-x-1">
          {tabs.map((tab,index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab);
                params.set('tab',tab.id);
                params.delete('page');
                router.push(currentPath + '/?'  + params.toString());
              }}
              className={`${
                activeTab.id === tab.id ? "" : "hover:text-slate-800/60"
              } relative rounded-full px-3 py-1.5 text-lg font-medium text-slate-800 outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
            {activeTab.id === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-slate-100 mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              )}
  
              {tab.title}
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