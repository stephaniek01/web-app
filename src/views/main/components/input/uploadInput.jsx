import {Fragment} from "react";

const data=[
    {},{}
]

const UploadInput = ({id, label, itemClass}) => {
    return (
        <div className={"flex flex-col"}>
            <input id={id} type={"file"} className={"hidden"}/>
            <label htmlFor={id} className={"border border-dashed border-green-100 h-10 flex items-center justify-center rounded-md cursor-pointer"}>
                {label ? label : "Add File"}
            </label>
            <div className={`grid grid-cols-3 gap-4 mt-4 ${itemClass}`}>
                {/*{data.map((item,index)=>{*/}
                {/*    return(*/}
                        <div className={"bg-gray-50 rounded-md"}>
                            Image
                        </div>
                {/*    )*/}
                {/*})}*/}
            </div>
        </div>
    )
}
export default UploadInput;
