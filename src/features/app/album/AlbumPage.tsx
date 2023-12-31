'use client'
import CommonPage from "../../common/components/CommonPage";
import albumMaster from '../../../data/albumMaster.json';
import type { Albums } from '../../../data/types';
import AlbumContent from "./components/AlbumContent";

export default function AlbumPage({ albumId }: { albumId: string }) {

    const album : Albums | undefined 
      = albumMaster.find(data => data.albumId === albumId);

    return (
        <CommonPage>
            {album === undefined
            ?<div>結果なし</div>
            :<AlbumContent album={album} />
            }
        </CommonPage>
      );
  }