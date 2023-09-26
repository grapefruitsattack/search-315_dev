import { SetListSong } from './SetListSong';

export class SetListData {
    title: string;
    description: string;
    author: string;
    setListSongs: SetListSong[];
    url: string;

    constructor() {
        this.title = '';
        this.description = '';
        this.author = '';
        this.setListSongs = [];
        this.url = '';
    };
}