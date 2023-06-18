
import singingMaster from '../data/singingMaster.json';
import borderHover from '../app/border-hover.module.css';
import Link from 'next/link';

interface ItemCSS extends React.CSSProperties{
  '--c':string
}
export default function IdolBlock({ id }: { id: string }) {
  const color = singingMaster.find(data => data.singingInfoId === id)?.color;
  const colorStr:string = color ===undefined ?'' : color;
  const style: ItemCSS = {
    "--c": '#'+colorStr
  };
    return (
        <Link
          style={style}
          href={{ pathname: '/search', query: {search: id }}}
          // className={`group idol-block border-`+id}
          className={`group ` + borderHover.idol}
        >
        <div className={`inline-block justify-items-center items-center transition-transform group-hover:-skew-y-3 group-hover:text-gray-600 motion-reduce:transform-none`}>
        <span>
        <h2 className={` text-2xl lg:text-3xl text-gray-800 font-sans m-0 max-w-[30ch]`}>
              {''}{singingMaster.find(data => data.singingInfoId === id)?.singingInfoName}
          </h2>
          <p className={`max-w-[30ch] font-semibold text-xs lg:text-sm opacity-70 text-left text-`+id}>
          {singingMaster.find(data => data.singingInfoId === id)?.singingInfoRomajiName}
          </p>
        </span>
        </div>
        </Link>
    )}
