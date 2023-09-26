'use client'
import { useState, useReducer, ChangeEvent, isValidElement, Dispatch, useEffect, SetStateAction } from "react";
import singingMaster from '../../../../../data/singingMaster.json';
import albumSeriesMaster from '../../../../../data/singingMaster.json';

const initialPplState:string[] = [];
const initialAlbumSeriesState:string[] = [];

const reducerFunc = (state:string[], action:{value:string,isValid:boolean})=> {
    let returnState: string[] = [];
    const unitPrefix = action.value.substring(0, 3);
    if(action.value.substring(3, 5) === '00'){
        // ユニット
        if(action.isValid){
            const unitMemberIds: string[]= singingMaster.filter(data=>data.singingInfoId.substring(0, 3) === unitPrefix).map(data=>data.singingInfoId);
            returnState = state.concat(unitMemberIds);
        } else {
            const unitPrefix = action.value.substring(0, 3);
            returnState = state.filter(data => data.substring(0, 3) !== unitPrefix);
        }
    } else {
        // 個人
        if(action.isValid){
            returnState = [...state,action.value,unitPrefix.concat('00')];
            //ユニットメンバーが全員選ばれている場合はユニットも有効化
            const singingInfoIds: string[] = [];
            for(const data of singingMaster){
                if(data.personFlg===1&&data.singingInfoId.substring(0, 3)===unitPrefix){
                    if([...state,action.value].includes(data.singingInfoId)===false){
                        returnState = [...state,action.value];
                        break;
                    };
                };
            };
        } else {
            returnState = state.filter(data => data !== action.value && data !== unitPrefix.concat('00'));
        }
    }
    return returnState;
}

export default function PplSelectContents ({changeSearchParams}:{ changeSearchParams: (pplState: string[]) => void;}) {



    const [pplState, setPplState] = useState(initialPplState);


    return (
    <>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-JUP00'>
        <PplCheckboxLabel idolId='JUP00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='JUP01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='JUP02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='JUP03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-DRS00'>
        <PplCheckboxLabel idolId='DRS00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='DRS01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='DRS02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='DRS03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-ALT00'>
        <PplCheckboxLabel idolId='ALT00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='ALT01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='ALT02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-BEI00'>
        <PplCheckboxLabel idolId='BEI00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='BEI01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='BEI02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='BEI03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-DBL00'>
        <PplCheckboxLabel idolId='DBL00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='DBL01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='DBL02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-FRM00'>
        <PplCheckboxLabel idolId='FRM00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='FRM01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='FRM02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='FRM03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-SAI00'>
        <PplCheckboxLabel idolId='SAI00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SAI01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SAI02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SAI03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-HIJ00'>
        <PplCheckboxLabel idolId='HIJ00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='HIJ01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='HIJ02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='HIJ03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='HIJ04' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='HIJ05' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-SSK00'>
        <PplCheckboxLabel idolId='SSK00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SSK01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SSK02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-CFP00'>
        <PplCheckboxLabel idolId='CFP00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CFP01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CFP02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CFP03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CFP04' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CFP05' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-MFM00'>
        <PplCheckboxLabel idolId='MFM00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='MFM01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='MFM02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='MFM03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-SEM00'>
        <PplCheckboxLabel idolId='SEM00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SEM01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SEM02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='SEM03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-KGD00'>
        <PplCheckboxLabel idolId='KGD00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='KGD01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='KGD02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='KGD03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-FLG00'>
        <PplCheckboxLabel idolId='FLG00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='FLG01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='FLG02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='FLG03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-LGN00'>
        <PplCheckboxLabel idolId='LGN00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='LGN01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='LGN02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='LGN03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    <div className='flex flex-wrap p-1 gap-3 justify-center items-center border-t-[3px] border-l-4 border-CLF00'>
        <PplCheckboxLabel idolId='CLF00' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CLF01' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CLF02' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
        <PplCheckboxLabel idolId='CLF03' pplState={pplState} setPplState={setPplState} changeSearchParams={changeSearchParams}/>
    </div>
    </div>
    </>);
};


function PplCheckboxLabel(
    {idolId,pplState,setPplState,changeSearchParams}
    :{
        idolId: string
        ,pplState: string[]
        ,setPplState: Dispatch<SetStateAction<string[]>>
        ,changeSearchParams: (pplState: string[]) => void;
    }) {
    const idolName: string = singingMaster.find(data=>data.singingInfoId === idolId)?.abbrName || "";
    const isUnit: boolean = idolId.substring(3, 5) === '00';
    return(
        <label className='flex flex-row relative cursor-pointer'>
        <input 
            type="checkbox" value={idolId} checked={pplState.includes(idolId)}
            className='hidden peer'
            onChange={(e)=>{
                const state: string[] = reducerFunc(pplState,{value: e.target.value, isValid: e.target.checked});
                setPplState(state);
                changeSearchParams(state);
            }}
        />
            <div className={`text-left
                justify-center px-2 
                text-stone-500
                
                font-sans text-sm lg:text-base 
                bg-stone-200/20 peer-checked:bg-stone-200/0
                hover:bg-green-200/20
                hover:text-green-400
                border-green-300/0 border-2
                peer-checked:border-2
                rounded-lg peer-checked:rounded-none
                drop-shadow-md peer-checked:drop-shadow-none
                transition-all duration-500 ease-out
                select-none 
                ${isUnit
                ?'font-bold peer-checked:border-blue-300 peer-checked:text-blue-400 '
                :'peer-checked:border-green-300 peer-checked:text-green-500 '}`}
            >
                {idolName}
            </div>
        </label>
    )
  };