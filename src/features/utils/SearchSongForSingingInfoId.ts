
import type { SongMaster, SongInfo, Tabs } from '../../data/types';

export default function SearchSongForSingingInfoId(singingInfoId: string[], songInfo: SongInfo[] ): SongInfo[]
{
    const songInfoResults = songInfo.filter(data => singingInfoId.includes(data.singingInfoId));

    const distinctSongIds :string[] = Array.from(new Set(songInfoResults.map(data => {
        return data.songId;
      })));
      
    const results: SongInfo[] = [];
    distinctSongIds.forEach(distinctSongId => {
    const res = songInfo.find((data) => data.songId === distinctSongId);
    if(res != null){results.push(res)};
    });

    return results;
}