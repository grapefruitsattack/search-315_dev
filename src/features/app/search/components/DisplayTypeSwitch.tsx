'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function DisplayTypeSwitch(
  { currentValue,switchItems, paramId }
  : { currentValue:string, switchItems: {label: string; id: string;}[], paramId:string })
{
  const params = new URLSearchParams(useSearchParams().toString());
  params.set('page','1');
  const currentPath: string = usePathname();
  let urlParams: {[key: string]: string}= {};
  params.forEach(function(value: string, key: string) {
    urlParams[key] = value;
  });
  const otherParams: String =params.size === 0?'':'&' + params.toString();

  const paramVal: string = currentValue;
  
  // 選択した値を管理（初期値：ラジオ１）
  const [val, setVal] = useState(switchItems.find((data)=>data.id === paramVal) || switchItems[0]);
  // ラジオボタンの値がチェンジされた時

  return (
    <div className="flex w-full ">
      <h2></h2>
      <div 
        className="container  grid w-auto grid-flow-col space-x-2 rounded-xl bg-gray-200 p-2"
        >
        {switchItems.map((item) => {
          return (
            <div key={item.id}>
              <Link 
                href={{ pathname: currentPath, query: {...urlParams, [paramId]: item.id} }}
                onClick={() => {
                  setVal(item);
                }}
              className={` ${
                item.id === val.id ? "" : "hover:text-slate-800/60"
              } relative rounded-full px-3 py-1.5 text-sm text-slate-800 outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
              >
              {item.id === val.id && (
              <motion.span
                layoutId={`DisplayTypeSwitch`+`order`}
                className="absolute inset-0 z-10 bg-slate-100 mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              )}
                {item.label}
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
        }