'use client'
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

export default function HeaderAndFooter() {

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    
    return (
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="z-50  py-2 fixed left-0 top-0 flex flex-row w-full items-center  justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">  
                
            <button className="absolute left-2" onClick={()=>setIsDrawerOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(56,83,201,1)"></path></svg>
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
                    <img src="/search315_logo.svg" width="200" height="200" alt="ホームアイコン" />
                    </Link>
                </code>
            </p>
        </div>
        );
    }