import type { LiveMaster, LiveSetLists, SongMaster } from '../../../data/types';
import liveMaster from '../../../data/liveMaster.json';
import liveSetLists from '../../../data/liveSetLists.json';
import GetSongOtherVersion from './GetSongOtherVersion';

export default function SearchLiveBySongId(songMaster: SongMaster): LiveMaster[]
{
    const otherVersinon: string[]
      = songMaster.commonSong=== ''
        ?[]
        :GetSongOtherVersion(songMaster.songId,songMaster.commonSong)
        .map((data)=> data.songId);

    const liveSetListsResults 
      = liveSetLists.filter(data => 
          (data.songId === songMaster.songId 
          || (otherVersinon.includes(data.songId))
          )
          && songMaster.isUnitColle === 0 && songMaster.isSoloColle === 0
          );

    const distinctlivePerIds: string[] = Array.from(new Set(liveSetListsResults.map(data => {
        return data.livePerId; })));
      
    const liveMasterResults: LiveMaster[] = [];
    distinctlivePerIds.forEach(livePerId => {
      const res = liveMaster.find((data) => data.livePerId === livePerId);
      if(res != null){liveMasterResults.push(res)};
    });

    return liveMasterResults;
}