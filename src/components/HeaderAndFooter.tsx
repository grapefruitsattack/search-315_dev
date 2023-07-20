import Link from 'next/link';

export default function HeaderAndFooter() {
    return (
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="z-50 py-2 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">  
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
            <div className="z-50 fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
                <a
                    className="pointer-events-none text-xs flex place-items-center gap-2 p-0 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>このサイトは個人によって運営されている非公式ファンサイトです</span>
                </a>
            </div>
        </div>
        );
    }