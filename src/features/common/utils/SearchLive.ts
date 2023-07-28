import type { LiveMaster, LiveSetLists, SongMaster } from '../../../data/types';
import liveMaster from '../../../data/liveMaster.json';
import liveSetLists from '../../../data/liveSetLists.json';

export default function SearchLiveBySongId(songMaster: SongMaster): LiveMaster[]
{
    const liveSetListsResults 
      = liveSetLists.filter(data => 
          (data.songId === songMaster.songId 
          || (songMaster.commonSong !== '' && data.songId === songMaster.commonSong)
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