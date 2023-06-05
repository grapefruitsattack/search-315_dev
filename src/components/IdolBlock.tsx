
import singingInfo from '../data/singingInfo.json';
import borderHover from '../app/border-hover.module.css';

interface ItemCSS extends React.CSSProperties{
  '--c':string
}
export default function IdolBlock({ id }: { id: string }) {
  const color = singingInfo.find(data => data.singingInfoId === id)?.color;
  const colorStr:string = color ===undefined ?'' : color;
  const style: ItemCSS = {
    "--c": '#'+colorStr
  };
    return (
        <a
          style={style}
          href={`/` + id}
          // className={`group idol-block border-`+id}
          className={`group ` + borderHover.idol}
        >
        <span className={`inline-block justify-items-center items-center transition-transform group-hover:-skew-y-3 group-hover:text-gray-600 motion-reduce:transform-none`}>
        <h2 className={` text-2xl lg:text-3xl text-gray-800 font-sans m-0 max-w-[30ch]`}>
              {''}{singingInfo.find(data => data.singingInfoId === id)?.singingInfoName}
          </h2>
          <p className={`max-w-[30ch] font-semibold text-xs lg:text-sm opacity-70 text-left text-`+id}>
          {singingInfo.find(data => data.singingInfoId === id)?.singingInfoRomajiName}
          </p>
            </span>
        </a>
    )}
