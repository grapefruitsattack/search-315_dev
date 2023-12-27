'use client'
import { Button, Img } from "@chakra-ui/react";
import CommonPage from "../../common/components/CommonPage";
import {useSnowParam} from '../../common/hooks/useSnowParam';

export default function SettingPage({ }: { }) {

  //ローカルストレージ
  const [snowParam, setSnowParam] = useSnowParam({snowIsValid:'',noticeCheckedYear:''});

  const imgsrc:string = snowParam.snowIsValid==='1'?'/parts/toggle_on.png':'/parts/toggle_off.png' ;

    return (
        <CommonPage>
        <article className="pt-32 pb-48 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-mono">
        <section className="pb-20">
        <h2 className="text-xl pb-2 font-bold">雪を降らせる</h2>

        <Button
            className="relative"
            onClick={()=>setSnowParam(
                {snowIsValid:snowParam.snowIsValid==='0'?'1':'0',noticeCheckedYear:''}
                )}
        >
            <Img className="h-[30px] " src={imgsrc}></Img>
            {/* <Img className="h-[14px] absolute left-[12px] top-[1px]" src={'/snow/togglesnow.png'}></Img> */}
        </Button>


        </section>



        </article>
        </CommonPage>
      );
  }