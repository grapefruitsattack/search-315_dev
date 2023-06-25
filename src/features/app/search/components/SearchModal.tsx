'use client'
import { useModal } from "react-hooks-use-modal";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useState } from "react";
import { SearchParams } from '../class/SearchParams';
import SearchModalCheckbox from "./SearchModalCheckbox";
import { Url } from "next/dist/shared/lib/router/router";

export const SearchModal: React.VFC = () => {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        focusTrapOptions : { 
        clickOutsideDeactivates : true
        },  
    });

    const router = useRouter();
    const currentPath: string = usePathname();
    const urlSearchParams = useSearchParams();
    const searchParams = new SearchParams(urlSearchParams);
    const [values, setValues] = useState(new SearchParams(urlSearchParams));
    let urlParams: {[key: string]: string}= {};
    const params = new URLSearchParams(urlSearchParams.toString());
    let href: Url = { pathname: currentPath, query: decodeURI(params.toString()) };
    
    function changeSearchParamsIdolId(idolId:string, onFlg: boolean): void {
        values[idolId] = onFlg? "1": "0";
        const tmpStr: string = params.get('search')||'';
        const tmpStrArray: string[] = tmpStr.split(' ');
        const newTmpStrArray: string[] = tmpStrArray.filter(str => str !== idolId);
        if(onFlg){
            newTmpStrArray.push(idolId);
        };
        params.set('search',newTmpStrArray.join(' '));
        console.log(params.get("search"));
    };
    
    return (
        <label className={" flex items-center relative w-max cursor-pointer select-none"}>
        <div>
        <button onClick={open}>OPEN</button>
        <Modal>
            <AnimatePresence mode="wait">
            <motion.div
                key={'modal'}    
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}    // アンマウント時
            >
        <div className="bg-white px-16 py-14 h-[70vh] w-[70vh] rounded-md text-center overflow-auto">
            <h1>Title</h1>
        <div className='flex flex-col gap-6'>
        <SearchModalCheckbox 
            unitPrefix="JUP" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="JUP" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="JUP" idolNum="03" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="BEI" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
            <button 
                onClick={() => {
                    setValues(new SearchParams(urlSearchParams));
                close();
                }}
            >CLOSE</button>
            <button 
                onClick={() => {
                router.push(currentPath + '/?'  + decodeURIComponent(params.toString()));
                close();
                }}
            >SEARCH</button>

            

            </div>
            
            </motion.div>
            </AnimatePresence>
        </Modal>
        </div>
    </label>
    );
};