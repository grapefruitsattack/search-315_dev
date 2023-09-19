import { ReadonlyURLSearchParams } from 'next/navigation';
import type { SongMaster,Albums,MvInfo,LiveMaster } from '../../../../data/types';

export class SetListData {
    trackNo: number;
    albumId: string;
    songId: string;
    songTitle: string;
    displayArtist: string;
    releaseDate: string;

    constructor(songMaster : SongMaster) {
        this.trackNo = songMaster.trackNo;
        this.albumId = songMaster.albumId;
        this.songId = songMaster.songId;
        this.songTitle = songMaster.songTitle;
        this.displayArtist = songMaster.displayArtist;
        this.releaseDate = songMaster.releaseDate;
    };
}