'use client'
import { useModal } from "react-hooks-use-modal";
import { motion, AnimatePresence } from "framer-motion";
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
        <label className={"flex items-center relative w-max cursor-pointer select-none"}>
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
        <div className="bg-white lg:px-14 px-8 py-14 h-[70vh] w-[70vw] rounded-md text-center overflow-y-scroll">

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