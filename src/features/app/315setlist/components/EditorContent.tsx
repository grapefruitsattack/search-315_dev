'use client'
import SelectDataModal from "./SelectData/SelectDataModal";
import ColumnArea from "./ColumnArea/ColumnArea";

export default function EditorContent({ }: { }) {

    return(
    <div>
        editor
        <ColumnArea/>
        <SelectDataModal/>
    </div>
    )
}
