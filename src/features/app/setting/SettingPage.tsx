'use client'
import { Button } from "@chakra-ui/react";
import CommonPage from "../../common/components/CommonPage";
import {useSnowParam} from '../../common/hooks/useSnowParam';

export default function SettingPage({ }: { }) {

  //ローカルストレージ
  const [snowParam, setSnowParam] = useSnowParam({snowIsValid:'',noticeCheckedYear:''});

    return (
        <CommonPage>
        <article className="pt-32 pb-48 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-mono">
        <section className="pb-20">
        <h2 className="text-xl pb-2 font-bold">雪を降らせる</h2>

        <Button
            onClick={()=>setSnowParam(
                {snowIsValid:snowParam.snowIsValid==='0'?'1':'0',noticeCheckedYear:''}
                )}
        >
            切替ボタン
        </Button>


        </section>



        </article>
        </CommonPage>
      );
  }