'use client'
import { NextPage } from 'next'
import { useSearchParams } from 'next/navigation'
import songInfo from '../../data/songInfo.json';
export default function Search() {
    const searchParams = useSearchParams();
    const search :string | null = searchParams.get('search');
    const result = songInfo.filter(data => data.singingInfoId === search);
    return (
      <div>
        <h1>test</h1>
        <h1>{search}</h1>
      <ul>
        {result.map((data) => (
          <li key={data.albumId+data.trackNo+data.singingInfoId}>{data.albumId},{data.trackNo},{data.singingInfoId}</li>
        ))}
      </ul>
      </div>
    );
  }
