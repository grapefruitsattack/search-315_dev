'use client'
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Select from "react-select";

const options = [
    { value: "desc", label: "リリース日新しい順" },
    { value: "asc", label: "リリース日古い順" },
  ];

export default function SortSelect(
    { currentValue, paramId }
    : { currentValue:string, paramId:string })
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

    const [selectedValue, setSelectedValue] 
        = useState(options.find((option)=>option.value === currentValue) || options[0]);

    return (
    <div style={{  }}
        className='w-fit text-sm font-sans shadow-md'
    >
        <Select
        className='rounded border border-teal-300'
        options={options}
        defaultValue={selectedValue}
        onChange={(value) => {
            value ? setSelectedValue(value) : null;
            params.set(paramId,value?.value||'desc');
            params.delete('page');
            router.push(currentPath + '?'  + params.toString());
        }}
        isSearchable={false}
        />
    </div>
    );
}