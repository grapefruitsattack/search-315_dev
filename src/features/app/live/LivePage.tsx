'use client'
import liveMaster from '../../../data/liveMaster.json';
import CommonPage from "../../../components/CommonPage";
import LiveContent from "./components/LiveContent";
import type { SongMaster,LiveMaster } from '../../../data/types';

export default function LivePage({ livePerId }: { livePerId: string }) {

    const result : LiveMaster | undefined 
      = liveMaster.find(data => data.livePerId === livePerId);
      
    return (
        <CommonPage>
            {result === undefined
            ?<div>結果なし</div>
            :<LiveContent result={result} />
            }
        </CommonPage>
      );
}