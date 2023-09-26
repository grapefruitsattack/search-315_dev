import { useCallback, useEffect, useState } from 'react'
import { SetListData } from '../../app/315setlist/class/SetListData'

const STORAGE_315SETLIST_SERVICE = '315SetlistData';

export function use315SetlistData(
    defaultValue: SetListData
  ): [setListData: SetListData, setData: (setListData: SetListData) => void] {

  const [setListDataInternal, setDataInternal] = useState(defaultValue);

  // クライアントでの初期レンダリング直後にローカルストレージの設定を反映
  useEffect(() => {
    const jsonStr = localStorage.getItem(STORAGE_315SETLIST_SERVICE);
    const setListData: SetListData = jsonStr===null?new SetListData():JSON.parse(jsonStr);
    if(defaultValue!==setListData){
        setDataInternal(setListData);
    }
  }, [setDataInternal]);

  // 外部からのセッター呼び出し時にローカルストレージに値を保存する
  const setData = useCallback(
    (setListData: SetListData) => {
      localStorage.setItem(STORAGE_315SETLIST_SERVICE, JSON.stringify(setListData));
      setDataInternal(setListData);
    },
    [setDataInternal]
  );

  return [setListDataInternal, setData]
}