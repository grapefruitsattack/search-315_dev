'use client'
import songMaster from '../../../data/songMaster.json';
import type { SongMaster,MvInfo } from '../../../data/types';
import MvInfos from '../../../data/mvInfo.json';

export default function GetMv(
    songResult: SongMaster
  ): MvInfo[] {

    return MvInfos.filter(data =>
        (songResult.isSoloColle === 0 && songResult.isUnitColle === 0 && songResult.execFlg === 0)
        && (data.songId === songResult.songId || data.songId === songResult.commonSong)
        ) || [];
    
}