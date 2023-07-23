'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Tooltip} from "@chakra-ui/react";

export default function ShareModuleContent(
    { text, url }: { text: string, url: string }
  ) {
    
    const shareURLTwitter = (text: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    const shareURLFacebook:string = `https://www.facebook.com/share.php?u=${encodeURIComponent(`${url}`)}`;
    const shareURLMisskey = (text: string) => `https://misskeyshare.link/share.html?text=${encodeURIComponent(text)}`;
    const shareURLMastodon = (text: string) => `https://donshare.net/share.html?text=${encodeURIComponent(text)}`;
    const shareURLSidemisskey = (text: string) => `https://side.misskey.productions//share?text=${encodeURIComponent(text)}`;

    const shareText = `${text}\n${url}`;

    const [val, setVal] = useState(shareText);
    //ツールチップ
    const [tooltipOn, setTooltipOn] = useState<boolean>(false);

    //テキストコピー
    function copyTextToClipboard(text: string) {
        navigator.clipboard.writeText(text)
        .then(function() {
            setTooltipOn(true);
            window.setTimeout(function(){setTooltipOn(false);}, 1500);
        }, function(err) {
        });
      }

    return (
        <section>
        {/* Share Modal by https://tailwindcomponents.com/component/share-modal */}
        <div className="my-4">
          {/* <p className="text-sm">Share this link via</p> */}
        <div className="flex flex-wrap justify-center my-6 gap-y-3 gap-x-4">
        {/* ツイッター */}
        <div className="flex flex-col items-center w-18">
            <a className="flex font-sans text-sm text-[#1d9bf0] justify-center">Twitter</a>
            <a
                className="w-12 h-12 border 
                hover:bg-[#1d9bf0]/10 
                text-[#1d9bf0]/80 hover:text-white font-sans
                hover:fill-white rounded-full 
                flex items-center justify-center
                border border-[#1d9bf0]/30 hover:border-white
                shadow-md
                hover:shadow-xl hover:shadow-[#1d9bf0]/50 
                cursor-pointer
                transition-all duration-500 ease-out
                "
                href={shareURLTwitter(val)}
                target="_blank"
                rel="noopener noreferrer"
            >
            <img
              className={`h-[24px] w-[24px]`}
              src={`/twitter_Logo_blue.svg`}
              alt="アートワーク"
            />
            </a>
        </div>
        {/* フェイスブック */}
        {/* <div>
            <a
                className="flex 
                items-center justify-center
                hover:bg-[#1877f2] 
                fill-[#1877f2] hover:fill-white 
                text-[#1877f2] hover:text-white font-sans
                w-auto h-10
                rounded-full
                border border-[#1877f2]/30 
                shadow-md
                hover:shadow-xl hover:shadow-[#1877f2]/50 
                cursor-pointer
                transition-all duration-500 ease-out
                "
                href={shareURLFacebook}
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                >
                <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" ></path>
                </svg>
                <p className="text-sm mr-2 ml-0.5">facebook</p>
            </a>
        </div> */}
        {/* マストドン */}
        <div className="flex flex-col items-center w-18">
            <a className="flex font-sans text-sm text-[#6f5dfd] justify-center">Mastodon</a>
            <a
                className="w-12 h-12 
                hover:bg-[#6f5dfd]/20
                fill-[#6f5dfd] hover:fill-white 
                text-[#5749ca] hover:text-white font-sans
                rounded-full flex 
                items-center justify-center
                border border-[#6f5dfd]/30 hover:border-white
                shadow-md
                hover:shadow-xl hover:shadow-[#6f5dfd]/50 
                cursor-pointer
                transition-all duration-500 ease-out
                "
                href={shareURLMastodon(val)}
                target="_blank"
                rel="noopener noreferrer"
            >
            <img
              className={`h-[24px] w-[24px]`}
              src={`/Mastodon_icon.svg`}
              alt="アートワーク"
            />
            </a>
        </div>
        {/* Misskey */}
        <div className="flex flex-col items-center w-18">
            <a className="flex font-sans text-sm text-[#5db102] justify-center">Misskey</a>
            <a
                className="w-12 h-12 
                hover:bg-[#72d704]/20 fill-[#72d704] hover:fill-white 
                text-[#5da90a] hover:text-white font-sans
                rounded-full flex 
                items-center justify-center
                border border-[#72d704]/30 hover:border-white
                shadow-md
                hover:shadow-xl hover:shadow-[#72d704]/50 
                cursor-pointer
                transition-all duration-500 ease-out
                "
                href={shareURLMisskey(val)}
                target="_blank"
                rel="noopener noreferrer"
            >
            {/* misskey logo by https://misskey-hub.net/appendix/assets.html */}
            <img
              className={`h-[36px] w-[36px]`}
              src={`/misskey_icon.png`}
              alt="アートワーク"
            />
            </a>
        </div>
        {/* Sidemisskey */}
        {/* misskey logo by https://misskey-hub.net/appendix/assets.html */}
        {/* <div>
            <a
                className="pl-1
                hover:bg-[#15bc17] fill-[#15bc17] hover:fill-white 
                text-[#15bc17] hover:text-white font-sans
                w-auto h-10
                rounded-full flex 
                items-center justify-center
                border border-[#15bc17]/30 
                shadow-md
                hover:shadow-xl hover:shadow-[#15bc17]/50 
                cursor-pointer
                transition-all duration-500 ease-out
                "
                href={shareURLSidemisskey(val)}
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg width="20" height="20" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,18.9533,-15.1423)">
                        <path d="M39.173,198.893C32.64,198.893 26.34,197.426 20.273,194.493C14.207,191.559 8.84,187.593 4.173,182.593C-0.493,177.593 -4.193,171.926 -6.927,165.593C-9.66,159.259 -11.027,152.693 -11.027,145.893C-11.027,131.626 -4.993,120.093 7.073,111.293C19.14,102.493 35.907,97.159 57.373,95.293C57.907,86.359 58.24,67.867 58.373,57.6L-1.827,57.6L-1.827,30.2L91.773,30.2L91.773,32.2C91.773,52.334 91.24,79.226 90.173,95.093C99.373,95.759 108.373,97.093 117.173,99.093L117.173,66.288L148.773,66.288L148.773,83.493C148.773,88.159 148.74,92.659 148.673,96.993C148.607,101.326 148.573,105.426 148.573,109.293C157.373,113.026 166.107,117.559 174.773,122.893L163.573,150.293C157.707,146.426 152.04,143.093 146.573,140.293C145.373,151.226 144.398,202.099 144.398,202.099L114.284,202.449C114.284,202.449 115.307,137.759 115.973,127.893C106.907,125.359 97.373,123.759 87.373,123.093C83.773,148.959 78.04,168.059 70.173,180.393C62.307,192.726 51.973,198.893 39.173,198.893ZM54.773,123.893C43.44,125.226 34.74,127.759 28.673,131.493C22.607,135.226 19.573,140.026 19.573,145.893C19.573,148.959 20.34,152.093 21.873,155.293C23.407,158.493 25.373,161.159 27.773,163.293C30.173,165.426 32.573,166.493 34.973,166.493C44.44,166.493 51.04,152.293 54.773,123.893Z"/>
                    </g>
                </svg>
                <p className="text-sm mr-2 ml-0.5">さいどみすきー</p>
            </a>
        </div> */}
        
        </div>

        {/* シェアテキストを編集 */}
        {/* Textarea by https://tailwindcomponents.com/component/share-modal */}
          {/* <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" /> */}
            <div className="max-w-2xl mx-auto">

                <label className="block text-sm font-sans text-gray-900 dark:text-gray-400">
                    シェアテキストを編集
                </label>

                <textarea 
                    id="message" 
                    rows={4} 
                    className="block p-2.5 w-full text-xs lg:text-sm text-blue-900 
                    bg-gray-50 rounded-lg border border-blue-300 
                    focus:ring-blue-500 focus:border-blue-500 " 
                    value={val}
                    onChange={(e) => {
                        setVal(e.target.value);
                      }}
                    placeholder="シェアテキスト"
                    >
                </textarea>

                {/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js" strategy="lazyOnload"></script> */}
            </div>
            <div className='flex mt-1 gap-2 justify-end'>
            <motion.button 
                className='rounded-lg border-2 border-pink-500 
                    text-pink-500 text-sm font-bold leading-tight
                    hover:bg-pink-200/50
                    transition-all duration-500 ease-out
                    p-2'
               onClick={() => setVal(shareText)}
               whileHover={{ scale: 1 }}
               whileTap={{ scale: 0.8 }}
               transition={{ duration: 0.05 }}
            >リセット</motion.button>
            <Tooltip className = '' placement='bottom' label='コピーしました' isOpen = {tooltipOn}>
                <motion.button className='rounded-lg border-2 border-green-500 
                    text-green-500 text-sm font-bold leading-tight
                    hover:bg-green-200/50
                    transition-all duration-500 ease-out
                    p-2'
                onClick={() => copyTextToClipboard(val)}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.05 }}
                >コピー</motion.button>
            </Tooltip>
            </div>


        </div>
        </section>
    )
}