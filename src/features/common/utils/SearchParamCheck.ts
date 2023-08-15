import type { SingingMaster } from '../../../data/types';
import singingMaster from '../../../data/singingMaster.json';

export function isValidSearchQParam(searchQParam: string[]): boolean
{
    const singingInfoIds: string[] = [];
    singingMaster.forEach((e)=>{
        if(e.personFlg===1){
            singingInfoIds.push(e.singingInfoId);
        }
    });
    let isValid: boolean = true;
    searchQParam.forEach((data)=>{
        if(singingInfoIds.includes(data)===false){
            isValid = false;
        }
    });

    return isValid;
}