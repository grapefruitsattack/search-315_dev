export default function HeaderAndFooter() {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
            
            <code className="font-mono font-bold">サイドエムサーチ</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
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