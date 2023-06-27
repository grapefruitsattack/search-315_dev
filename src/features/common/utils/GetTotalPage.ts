
import { redirect } from 'next/navigation'
import { useEffect } from 'react';
import { useParams,useSearchParams,  } from 'next/navigation'

export default function GetTotalPage(paramPage: string | null, contentsLength: number, redirectRoot: string )
{
    const totalPage: number = Math.ceil((contentsLength) / 18);
    console.log(contentsLength)
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    // ページパラメータが不正だった場合、リダイレクト
    if(Number.isInteger(Number(paramPage)) === false){ 
        params.delete('page');
        redirect(`/${redirectRoot}${params.size === 0?'':'/?' + params.toString()} `);
    } else if(Number(paramPage) > totalPage){
        params.set('page',String(totalPage));
        redirect(`/${redirectRoot}${params.size === 0?'':'/?' + params.toString()} `);
    };

    return totalPage;
}