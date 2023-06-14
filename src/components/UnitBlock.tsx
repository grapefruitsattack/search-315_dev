
import singingMaster from '../data/singingMaster.json';
import borderHover from '../app/border-hover.module.css';

interface ItemCSS extends React.CSSProperties{
  '--c':string
}

export default function UnitBlock({ id }: { id: string }) {
  const color = singingMaster.find(data => data.singingInfoId === id)?.color;
  const colorStr:string = color ===undefined ?'' : color;
    return (
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          // className={`group
          // rounded-tl-3xl
          // bg-blue-950/70
          // border-l-8 border-t-8
          // px-1 py-2 
          // hover:border-gray-50/50
          // hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
          // border-`+ id + ` hover:bg-`+id+`/50`}
          style={{"--c": '#'+colorStr}as ItemCSS}
          className={`group `+borderHover.unit}
          target="_blank"
          rel="noopener noreferrer"
        >
        <span className={`inline-block justify-items-center items-center transition-transform group-hover:-skew-y-3 group-hover:text-gray-600 motion-reduce:transform-none text-gray-100 `}>
        <h2 className={`my-px text-2xl lg:text-4xl break-all lg:break-normal font-mono m-0 max-w-[30ch]`}>
              {''}{singingMaster.find(data => data.singingInfoId === id)?.singingInfoName}
          </h2>
            </span>
        </a>
    )}
