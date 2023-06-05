import type { Albums } from '../../data/types';
import path from 'path'
import sampleData from './albams.json';

export default function Home() {
    return (
      <div>
        <h1>{sampleData[1].album_id}</h1>
        <p>{sampleData[1].album_title_full}</p>
        <p>{sampleData[1].release_page}</p>
      </div>
    );
  }

// async function getArticles() {
//     console.log('test2');
//     const filePath = path.join(process.cwd(), 'src/app/articles/albams.json');
//     console.log(filePath);
//     console.log('test3');
//     const res = await fetch(filePath);
//     const albums = await res.json();
//     console.log(albums);
  
//     // エラーハンドリングを行うことが推奨されている
//     if (!res.ok) {
//       throw new Error("Failed to fetch articles");
//     }

    
//     return albums;
//   }

// export default async function Home() {
//     console.log('test1');
//     const articles = await getArticles();
//     return (
//       <div>
//         <h1>新着記事</h1>
//         <ul>
//           <li>記事1</li>
//           <li>記事2</li>
//           <li>記事3</li>
//         </ul>
//       </div>
//     )
//   }