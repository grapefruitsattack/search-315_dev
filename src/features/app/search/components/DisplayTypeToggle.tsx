'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import displayToggleCss from './../css/display-toggle.module.css';

export default function DisplayTypeToggle(
  { currentValue, paramId }
  : { currentValue:number, paramId:string })
{
  const router = useRouter();
  const params = new URLSearchParams(useSearchParams().toString());
  params.set('page','1');
  const currentPath: string = usePathname();
  let urlParams: {[key: string]: string}= {};
  params.forEach(function(value: string, key: string) {
    urlParams[key] = value;
  });
  const otherParams: String =params.size === 0?'':'&' + params.toString();

  
  // 選択した値を管理
  const [val, setVal] = useState(currentValue === 1);

  const handleChange = (chk: boolean) => {
    setVal(chk);
  };

  return (
    <>
<label className={" flex items-center relative w-max cursor-pointer select-none"}>
  <span className="text-lg font-bold mr-3">Toggle</span>
  <input 
    type="checkbox" 
    checked={val}
    onChange={(e) => {
      handleChange(e.target.checked);
      params.set(paramId,e.target.checked?"1":"0");
      params.delete('page');
      router.push(currentPath + '/?'  + params.toString());
    }}
    className={displayToggleCss.input + " appearance-none transition-colors cursor-pointer w-14 h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-slate-300"} 
  />  
  <span className={displayToggleCss.span + " absolute font-medium text-xs uppercase right-1 text-black"}> OFF </span>
  <span className={displayToggleCss.span + " absolute font-medium text-xs uppercase right-8 text-white"}> ON </span>
  <span className={displayToggleCss.span + " w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-stone-800"} />

</label>


</>
  );
}