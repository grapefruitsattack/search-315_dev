'use client'
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Select, { MultiValue } from "react-select";

const options = [
    { value: "subsc", label: "サブスク非対応曲を非表示" },
    { value: "colle", label: "ソロコレ・ユニコレ曲を非表示" },
  ];

export default function FilterSelect(
    { currentValueSubsc, currentValueColle }
    : { currentValueSubsc:number, currentValueColle:number })
{

    const router = useRouter();
    const [params, setParams] = useState(new URLSearchParams(useSearchParams().toString()));
    const currentPath: string = usePathname();
    let urlParams: {[key: string]: string}= {};
    params.forEach(function(value: string, key: string) {
      urlParams[key] = value;
    });
    const otherParams: String =params.size === 0?'':'&' + params.toString();

    //初期値生成
    const initValue =[];
    if(currentValueSubsc === 1){initValue.push(options[0]);};
    if(currentValueColle === 1){initValue.push(options[1]);};
    

    const [selectedValue, setSelectedValue] 
        = useState(initValue);

    return (
    <div style={{ width: "270px",  }}
    className='w-100 text-sm lg:text-sm font-sans shadow-md'
    >
    <Select
        className='rounded border border-teal-300'
      closeMenuOnSelect={true}
      defaultValue={selectedValue}
      isMulti
      options={options}
      placeholder="すべての曲を表示"
      onChange={(value) => {
        const workParam: URLSearchParams = new URLSearchParams(params.toString());
        const currentValue: {
            value: string;
            label: string;
        }[] =[];
        value.forEach((data)=>{
            currentValue.push(data);
        });
        workParam.delete('subsc');
        workParam.delete('colle');
        value.forEach((data)=>{
          workParam.set(data.value,'1');
          workParam.delete('page');
        });
        setSelectedValue(currentValue);
        setParams(workParam);
        router.push(currentPath + '?'  + workParam.toString());
      }}
      onMenuClose={()=>{
        const workParam: URLSearchParams = new URLSearchParams(params.toString());
        workParam.delete('subsc');
        workParam.delete('colle');
        selectedValue.forEach((data)=>{
          workParam.set(data.value,'1');
          workParam.delete('page');
        });
        setParams(workParam);
        router.push(currentPath + '?'  + workParam.toString());
      }}
      isSearchable={false}
      
    />

    </div>
    );
}