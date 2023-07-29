'use client'
import songMaster from '../../../data/songMaster.json';
import type { SongMaster,Albums } from '../../../data/types';

export default function GetSongOtherVersion(
    id: string, commonSongId: string
  ): SongMaster[] {

    return songMaster.filter(data => data.songId !== id && data.commonSong === commonSongId) || [];
    
}