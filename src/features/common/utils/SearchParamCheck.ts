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

export function getSearchTargetStr(searchQParamIn: string[]): string
{
    //重複を排除
    const searchQParam = Array.from(new Set(searchQParamIn));

    if(searchQParam.length===1){
        //アイドル  
        return singingMaster.find((data)=>data.singingInfoId===searchQParam[0])?.singingInfoName||'';
    }else if(searchQParam.length===2||searchQParam.length===3||searchQParam.length===5){
        //ユニット
        //ユニットコードが同一かチェック
        const unitCode: string[] = Array.from(new Set(searchQParam.map((e)=>{return e.substring(0, 3)})));
        if(unitCode.length!==1){
            //ユニットコードがすべて同一でない場合、空文字を返す
            return '';
        }
        //パラメータの数がユニットメンバーと一致するかチェック
        const singingInfoIds: string[] = [];
        singingMaster.forEach((e)=>{
            if(e.personFlg===1&&e.singingInfoId.substring(0, 3)===unitCode[0]){
                singingInfoIds.push(e.singingInfoId);
            }
        });
        if(searchQParam.length===singingInfoIds.length){
            return singingMaster.find((data)=>data.singingInfoId===unitCode[0]+'00')?.singingInfoName||'';
        }
    }
    return '';
}