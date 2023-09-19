'use client'
import CommonPage from "../../common/components/CommonPage";
import EditorContent from "./components/EditorContent";

export default function EditorPage({ }: { }) {

      
    return (
        <CommonPage>
        <article className="pt-32 pb-96 px-12 lg:px-24 bg-white lg:max-w-[1500px] lg:m-auto font-mono">
            <EditorContent />
        </article>
        </CommonPage>
      );
}