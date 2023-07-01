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
    const params = new URLSearchParams(useSearchParams().toString());
    params.set('page','1');
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
        className='rounded border border-blue-300'
      closeMenuOnSelect={false}
      defaultValue={selectedValue}
      isMulti
      options={options}
      placeholder="すべての曲を表示"
      onChange={(value) => {
        console.log(value.length)
        console.log(selectedValue.length)
        const currentValue: {
            value: string;
            label: string;
        }[] =[];
        value.forEach((data)=>{
            currentValue.push(data);
        });
        if(value.length < selectedValue.length){
            console.log(value)
            params.delete('subsc');
            params.delete('colle');
            value.forEach((data)=>{
                params.set(data.value,'1');
                params.delete('page');
            });
            router.push(currentPath + '/?'  + params.toString());
        };
        setSelectedValue(currentValue);
      }}
      onMenuClose={()=>{
        params.delete('subsc');
        params.delete('colle');
        selectedValue.forEach((data)=>{
            params.set(data.value,'1');
            params.delete('page');
        });
        router.push(currentPath + '/?'  + params.toString());
      }}
      
    />

    </div>
    );
}