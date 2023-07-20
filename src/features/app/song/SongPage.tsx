'use client'
import CommonPage from "../../../components/CommonPage";
import songMaster from '../../../data/songMaster.json';
import albamMaster from '../../../data/albamMaster.json';
import type { SongMaster,Albums } from '../../../data/types';
import SongContent from "./components/SongContent";

export default function SearchPage({ songId }: { songId: string }) {

    const result : SongMaster | undefined 
      = songMaster.find(data => data.songId === songId);
    const album : Albums | undefined 
      = albamMaster.find(data => data.albumId === result?.albumId);

    return (
      <CommonPage>
          {result === undefined || album === undefined
          ?<div>結果なし</div>
          :<SongContent result={result} albumResult={album}/>
          }
      </CommonPage>
    );
}