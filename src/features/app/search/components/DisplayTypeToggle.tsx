'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import displayToggleCss from './../css/display-toggle.module.css';

export default function DisplayTypeToggle(
  { currentValue, paramId, description }
  : { currentValue:number, paramId:string, description:string })
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
<div className={" flex items-center relative w-max cursor-pointer select-none"}>
  {/* https://tailwindcomponents.com/component/simple-checkbox */}
  <input 
    type="checkbox" id={paramId}
    checked={val}
    onChange={(e) => {
      handleChange(e.target.checked);
      params.set(paramId,e.target.checked?"1":"0");
      params.delete('page');
      router.push(currentPath + '?'  + params.toString());
    }}
    className='
    appearance-none h-6 w-6 bg-gray-400 rounded-full 
    checked:bg-green-300 checked:scale-75
    transition-all duration-200 peer
'
  />  
		<div className='h-6 w-6 absolute rounded-full pointer-events-none
        peer-checked:border-green-300 peer-checked:border-2
        '>
		</div>
		<label htmlFor={paramId} className='
    flex flex-col justify-center px-2 peer-checked:text-green-400 
    
    select-none'>
      {description}
    </label>
</div>


</>
  );
}