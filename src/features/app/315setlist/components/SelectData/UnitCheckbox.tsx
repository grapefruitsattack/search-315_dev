import { SearchParams } from '../../class/SearchParams';
import { useState } from "react";
import singingMaster from '../../../../../data/singingMaster.json';

export default function UnitCheckbox(
    { unitPrefix,searchParams,changeSearchParams }
    : { unitPrefix: string, searchParams: SearchParams, changeSearchParams: (idolId:string, onFlg: boolean) => void; })
  {

    const idolId = unitPrefix + "00";
    const unitMemberIds: string[]= singingMaster.filter(data=>data.singingInfoId.substring(0, 3) === unitPrefix).map(data=>data.singingInfoId);
    const unitName: string = singingMaster.find(data=>data.singingInfoId === idolId)?.singingInfoName || "";

  // 選択した値を管理
  const [val, setVal] = useState(searchParams.singingInfos.includes(idolId));

    return (
        <label className='flex flex-row relative cursor-pointer'>

            <input 
                type="checkbox" id={idolId} checked={val}
                className='hidden peer
                '
                onChange={(e) => {
                    setVal(e.target.checked);
                    for(const unitMemberId of unitMemberIds){
                        changeSearchParams(unitMemberId,e.target.checked);
                    }
                }}
            />
            {/* <span className='h-6 w-6 absolute rounded-full pointer-events-none
            peer-checked:border-green-300 peer-checked:border-2
            '>
            </span> */}
            <div className={`text-left
                    justify-center px-2 
                    text-stone-500
                    peer-checked:text-green-400`  +` 
                    font-sans text-sm lg:text-base 
                    bg-stone-200/20 peer-checked:bg-stone-200/0
                    hover:bg-green-200/20
                    hover:text-green-400
                    border-green-300/0 border-2
                    peer-checked:border-green-300 peer-checked:border-2
                    rounded-lg peer-checked:rounded-none
                    drop-shadow-md peer-checked:drop-shadow-none
                    transition-all duration-500 ease-out
                     select-none`}>
                {unitName}
            </div>

            <p className={`
  underline decoration-JUP00 hover:bg-JUP00/50 text-JUP00
  underline decoration-DRS00 hover:bg-DRS00/50 text-DRS00
  underline decoration-ALT00 hover:bg-ALT00/50 text-ALT00
  underline decoration-BEI00 hover:bg-BEI00/50 text-BEI00
  underline decoration-DBL00 hover:bg-DBL00/50 text-DBL00
  underline decoration-FRM00 hover:bg-FRM00/50 text-FRM00
  underline decoration-SAI00 hover:bg-SAI00/50 text-SAI00
  underline decoration-HIJ00 hover:bg-HIJ00/50 text-HIJ00
  underline decoration-SSK00 hover:bg-SSK00/50 text-SSK00
  underline decoration-CFP00 hover:bg-CFP00/50 text-CFP00
  underline decoration-MFM00 hover:bg-MFM00/50 text-MFM00
  underline decoration-SEM00 hover:bg-SEM00/50 text-SEM00
  underline decoration-KGD00 hover:bg-KGD00/50 text-KGD00
  underline decoration-FLG00 hover:bg-FLG00/50 text-FLG00
  underline decoration-LGN00 hover:bg-LGN00/50 text-LGN00
  underline decoration-CLF00 hover:bg-CLF00/50 text-CLF00

  
  `}>
</p>
        </label>
      );
    }