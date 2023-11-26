import type { SongMaster } from '../../../../data/types';

export class SetListSong {
    trackNo: number;
    albumId: string;
    albumTitle: string;
    songId: string;
    songTitle: string;
    displayArtist: string;
    releaseDate: string;

    constructor(songMaster : SongMaster) {
        this.trackNo = songMaster.trackNo;
        this.albumId = songMaster.albumId;
        this.albumTitle = songMaster.albumTitle;
        this.songId = songMaster.songId;
        this.songTitle = songMaster.songTitle;
        this.displayArtist = songMaster.displayArtist;
        this.releaseDate = songMaster.releaseDate;
    };
}