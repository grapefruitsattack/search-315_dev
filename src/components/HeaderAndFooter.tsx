'use client'
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Button ,Input, MenuButton
} from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {ShareSearchResultModal} from "../features/app/shareModal/ShareSearchResultModal";
import {getSearchTargetStr} from '../features/common/utils/SearchParamCheck';

export default function HeaderAndFooter() {

    //メニュー開閉
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    //検索結果画面共有ボタン
    const searchParams = useSearchParams();
    let isSearchPage: boolean = false;
    let search: string[] = [];
    let shareStr: string = '';
    let sharePass: string = '';
    if(usePathname()==='/search/'){
        isSearchPage = true;
        search = searchParams.get('q')?.split(' ')||[];
        const searchTargetStr: string = getSearchTargetStr(search);
        console.log(searchParams.get('tab'))
        switch (searchParams.get('tab')) {
            case 'song' :
            case null :
                shareStr = searchTargetStr===''?'曲検索結果':searchTargetStr+'の曲一覧';
                sharePass = `search/?q=${search.join('+')}&tab=song`;
                break;
            case 'album':
                shareStr = searchTargetStr===''?'アルバム検索結果':searchTargetStr+'のアルバム一覧';
                sharePass = `search/?q=${search.join('+')}&tab=album`;
                break;
            default:
                shareStr = '検索結果';
                sharePass = `search/?q=${search.join('+')}`;
                break;
        }
    }


    
    return (
        <>
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="z-50  py-2 fixed left-0 top-0 flex flex-row w-full items-center  justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">  
            <div className="absolute right-2">
                {isSearchPage? 
                    <ShareSearchResultModal 
                    title={shareStr}
                    pass={sharePass}
                    />
                    :<></>}
            </div>
            <button className="absolute left-2 fill-gray-500" onClick={()=>setIsDrawerOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" ></path></svg>
            </button>
            <Drawer
                isOpen={isDrawerOpen}
                placement='left'
                onClose={()=>setIsDrawerOpen(false)}
                size='xs'
            >
                <DrawerOverlay />
                <DrawerContent>
                <div className=" p-4">
                <button
                    className="hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
                    onClick={()=>setIsDrawerOpen(false)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
                </svg>
                </button>
                </div>

                <DrawerBody>
                    <Link className="
                        p-2
                        inline-block w-full hover:bg-gray-200 text-blue-900
                        transition-all duration-500 ease-out
                        text-xl font-sans justify-center
                    "
                        href={`/about`}
                        rel="noopener noreferrer">
                        このサイトについて
                    </Link>
                    <Link className="
                        p-2
                        inline-block w-full hover:bg-gray-200 text-blue-900
                        transition-all duration-500 ease-out
                        text-xl font-sans justify-center
                    "
                        href={`/qa`}
                        rel="noopener noreferrer">
                        Q&A
                    </Link>
                    <a className="
                        p-2
                        inline-block w-full hover:bg-gray-200 text-blue-900
                        transition-all duration-500 ease-out
                        text-xl font-sans justify-center
                    "
                        href={`https://docs.google.com/forms/d/e/1FAIpQLSdYMzA85KFDx2Qr_sigjKBAPAqlRoZB4KA8tkHbuchZQuL_9w/viewform?usp=sf_link`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        お問い合わせ <span className="text-sm"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                    </a>
                    <Link className="
                        p-2
                        inline-block w-full bg-gray-600 hover:bg-gray-200/0 
                        text-white hover:text-gray-600
                        transition-all duration-500 ease-out
                        text-xl font-sans justify-center
                    "
                        href={`/about`}
                        rel="noopener noreferrer">
                        TOPに戻る
                    </Link>
                </DrawerBody>

                <DrawerFooter>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <code className="font-mono font-bold">
                <Link
                    className =""
                    href={`/`}
                    rel="noopener noreferrer"
                >
                <img className="tablet:w-[200px] w-[150px] h-[50px]" src="/search315_logo.svg" width="200" height="200" alt="ホームアイコン" />
                </Link>
            </code>

            </div>
        </div>
        </>
        );
    }