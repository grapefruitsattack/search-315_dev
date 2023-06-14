
import { useSearchParams } from 'next/navigation'

export default function Pagination({ currentPage,totalPage }: { currentPage: number, totalPage: number }) {
      const omitFlg: boolean = totalPage >= 8;
      const params = new URLSearchParams(useSearchParams().toString());
      params.delete('page');
      const otherParams: String =params.size === 0?'':'&' + params.toString();

      return (
        // https://tailwindcomponents.com/component/tailwind-css-pagination-gradient
        <div className="grid min-h-[140px] w-full place-items-center rounded-lg lg:overflow-visible">
            <nav>
                <ul className="flex">

                    {
                      (function () {
                        const list: JSX.Element[] = [];
                        //左移動
                        if(currentPage === 1){
                          list.push(
                            <li key={0}>
                            <div className=
                                {`mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                              aria-label="Previous">
                                <span className={`text-sm text-slate-300`}>
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </span>
                            </div>
                            </li>
                          );
                        }else{
                          list.push(
                            <li key={0}>
                            <a className=
                                {`mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                              href={"?page="+String(currentPage-1)+otherParams}
                              aria-label="Previous">
                                <span className={`text-sm`}>
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>                              </span>
                            </a>
                            </li>
                          );
                        };

                        if(omitFlg){
                          //省略あり
                          if(currentPage <= 3){
                            for (let i: number = 1; i <= 4; i++) {
                              if(i === currentPage){
                                list.push(
                                  <li key={i}>
                                  <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" 
                                  href={"?page="+i+otherParams}>
                                    {i}
                                  </a>
                                  </li>
                                );
                              } else {
                                list.push(
                                  <li key={i}>
                                  <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                                  href={"?page="+i+otherParams}>
                                    {i}
                                  </a>
                                  </li>
                                );
                              };
                            };
                            list.push(
                              <li key={5}><div className="cursor-default mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" >
                                  ･･･</div></li>
                            );
                            list.push(
                              <li key={totalPage - 1}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${totalPage - 1}`+otherParams}>
                                {totalPage - 1}
                              </a>
                              </li>
                            );
                            list.push(
                              <li key={totalPage}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${totalPage}`+otherParams}>
                                {totalPage}
                              </a>
                              </li>
                            );
                          } else if(currentPage > 3 && currentPage < totalPage - 2) {
                            list.push(
                              <li key={1}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${1}`+otherParams}>
                                {1}
                              </a>
                              </li>
                            );
                            list.push(
                              <li key={2}><div className="cursor-default mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" >
                                  ･･･</div></li>
                            );
                            list.push(
                              <li key={currentPage - 1}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${currentPage - 1}`+otherParams}>
                                {currentPage - 1}
                              </a>
                              </li>
                            );
                            list.push(
                              <li key={currentPage}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" 
                              href={`?page=${currentPage}`+otherParams}>
                                {currentPage}
                              </a>
                              </li>
                            );
                            list.push(
                              <li key={currentPage + 1}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${currentPage + 1}`+otherParams}>
                                {currentPage + 1}
                              </a>
                              </li>
                            );
                            list.push(
                              <li key={currentPage + 2}><div className="cursor-default mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" >
                                  ･･･</div></li>
                            );
                            list.push(
                              <li key={totalPage}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${totalPage}`+otherParams}>
                                {totalPage}
                              </a>
                              </li>
                            );
                          } else if(currentPage >= totalPage - 2) {
                            list.push(
                              <li key={1}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${1}`+otherParams}>
                                {1}
                              </a>
                              </li>
                            );
                            list.push(
                              <li key={2}>
                              <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                              href={`?page=${2}`+otherParams}>
                                {2}
                              </a>
                              </li>
                            );
                            list.push(
                              <li key={3}><div className="cursor-default mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" >
                                  ･･･</div></li>
                            );
                            for (let i: number = totalPage - 3; i <= totalPage; i++) {
                              if(i === currentPage){
                                list.push(
                                  <li key={i}>
                                  <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" 
                                  href={"?page="+i+otherParams}>
                                    {i}
                                  </a>
                                  </li>
                                );
                              } else {
                                list.push(
                                  <li key={i}>
                                  <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                                  href={"?page="+i+otherParams}>
                                    {i}
                                  </a>
                                  </li>
                                );
                              };
                            };
                          };
                        } else {
                          //省略なし
                          for (let i: number = 1; i <= totalPage; i++) {
                            if(i === currentPage){
                              list.push(
                                <li key={i}>
                                <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out" 
                                href={"?page="+i+otherParams}>
                                  {i}
                                </a>
                                </li>
                              );
                            } else {
                              list.push(
                                <li key={i}>
                                <a className="mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300" 
                                href={"?page="+i+otherParams}>
                                  {i}
                                </a>
                                </li>
                              );
                            };
                          }

                        }

                        // 右移動
                        if(currentPage === totalPage){
                          list.push(
                            <li key={totalPage + 1}>
                            <div className=
                                {`mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                              aria-label="Next">
                              <span className="text-sm text-slate-300">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                              </span>
                            </div>
                            </li>
                          );
                        }else{
                          list.push(
                            <li key={totalPage + 1}>
                            <a className=
                                {`mx-1 flex h-9 w-7 lg:h-9 lg:w-9 items-center justify-center rounded-lg  border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                              href={"?page="+String(currentPage+1)+otherParams}
                              aria-label="Next">
                              <span className="text-sm">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                              </span>
                            </a>
                            </li>
                          );
                        };

                        return <ul className="flex">{list}</ul>;
                      }())
                    }

                </ul>
            </nav>

      </div>
      )}
  