'use client'
import { useModal } from "react-hooks-use-modal";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useState } from "react";
import { SearchParams } from '../class/SearchParams';
import SearchModalCheckbox from "./SearchModalCheckbox";
import singingMaster from '../../../../data/singingMaster.json';

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
    const params = new URLSearchParams(urlSearchParams.toString());


    //useState設定
    const [values, setValues] = useState(new SearchParams(urlSearchParams));
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

    

    //OPENボタン用設定
    let searchText: string = '';
    const searchTextArray: string[] = [];
    const searchParam :string[] = urlSearchParams.get('search')?.split(' ') || [];
    singingMaster.forEach((data)=>{
        if(searchParam.includes(data.singingInfoId)){
            searchText = searchText + '　' + data.singingInfoName;
            searchTextArray.push(data.singingInfoName);
        };
    });
    
    return (
        
        <label className={"flex items-center cursor-pointer select-none h-max"}>
        <div className="flex w-[85vw] justify-center m-auto">
            <div 
                className='
                flex p-0.5 bg-gradient-to-r from-indigo-300 to-emerald-300 items-center
                '
            >
                <div
                    className='flex flex-row
                        bg-gradient-to-r from-indigo-50 to-emerald-50 
                        border-2 border-white
                        text-teal-700
                        font-sans lg:text-base text-sm
                        p-1 items-center 
                    '
                >
                    <div
                        className='
                             
                            w-[70vw] truncate
                        '
                    >
                    {searchText}
                    </div>
                </div>
                
                <button 
                    className='flex justify-center px-2 text-white'
                    onClick={() => {
                        setValues(new SearchParams(urlSearchParams));
                        open();
                    }}
                >
                <svg xmlns="http://www.w3.org/2000/svg" 
                        className="icon icon-tabler icon-tabler-search" 
                        width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                    </svg>
                </button>
            </div>
        </div>
        <Modal>
            <AnimatePresence mode="wait">
            <motion.div
                key={'modal'}    
                initial={{ opacity: 0 }} // 初期状態
                animate={{ opacity: 1 }} // マウント時
                exit={{ opacity: 0 }}    // アンマウント時
            >
        <div className="bg-white lg:px-14 px-8 py-14 h-[70vh] w-[85vw] lg:w-[70vw] rounded-md text-center overflow-y-scroll">


        <button 
                onClick={() => {
                    setValues(new SearchParams(urlSearchParams));
                close();
                }}
            >CLOSE</button>
            <button 
                onClick={() => {
                    params.delete('page');
                    params.set('page','1');
                router.push(currentPath + '?'  + decodeURIComponent(params.toString()));
                close();
                }}
            >SEARCH</button>
            <h1>Title</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center '>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-JUP00'>
        <SearchModalCheckbox 
            unitPrefix="JUP" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="JUP" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="JUP" idolNum="03" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-DRS00'>
        <SearchModalCheckbox 
            unitPrefix="DRS" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="DRS" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="DRS" idolNum="03" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-ALT00'>
        <SearchModalCheckbox 
            unitPrefix="ALT" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="ALT" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-BEI00'>
        <SearchModalCheckbox 
            unitPrefix="BEI" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="BEI" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="BEI" idolNum="03" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-DBL00'>
        <SearchModalCheckbox 
            unitPrefix="DBL" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="DBL" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-FRM00'>
        <SearchModalCheckbox 
            unitPrefix="FRM" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="FRM" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="FRM" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-SAI00'>
        <SearchModalCheckbox 
            unitPrefix="SAI" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="SAI" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="SAI" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-SSK00'>
        <SearchModalCheckbox 
            unitPrefix="SSK" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="SSK" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-HIJ00'>
        <SearchModalCheckbox 
            unitPrefix="HIJ" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="HIJ" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="HIJ" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="HIJ" idolNum="04"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="HIJ" idolNum="05"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-CFP00'>
        <SearchModalCheckbox 
            unitPrefix="CFP" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="CFP" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="CFP" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="CFP" idolNum="04"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="CFP" idolNum="05"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-MFM00'>
        <SearchModalCheckbox 
            unitPrefix="MFM" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="MFM" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="MFM" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-SEM00'>
        <SearchModalCheckbox 
            unitPrefix="SEM" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="SEM" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="SEM" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-KGD00'>
        <SearchModalCheckbox 
            unitPrefix="KGD" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="KGD" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="KGD" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-FLG00'>
        <SearchModalCheckbox 
            unitPrefix="FLG" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="FLG" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="FLG" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-LGN00'>
        <SearchModalCheckbox 
            unitPrefix="LGN" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="LGN" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="LGN" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-2 border-CLF00'>
        <SearchModalCheckbox 
            unitPrefix="CLF" idolNum="01" searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="CLF" idolNum="02"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        <SearchModalCheckbox 
            unitPrefix="CLF" idolNum="03"  searchParams={values}
            changeSearchParams={changeSearchParamsIdolId} />
        </div>
        </div>
            <button 
                onClick={() => {
                    setValues(new SearchParams(urlSearchParams));
                close();
                }}
            >CLOSE</button>
            <button 
                onClick={() => {
                    params.delete('page');
                    params.set('page','1');
                router.push(currentPath + '?'  + decodeURIComponent(params.toString()));
                close();
                }}
            >SEARCH</button>

            

            </div>
            
            </motion.div>
            </AnimatePresence>
        </Modal>

        </label>
    );
};