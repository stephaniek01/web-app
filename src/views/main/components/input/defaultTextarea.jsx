import {Input} from "@material-tailwind/react";

const DefaultTextarea = ({label, type, placeholder}) => {
    return (
        <div>
            <textarea className={"w-full min-h-[80px] border border-blue-gray-200 rounded-md p-4"}>
            </textarea>
        </div>
    )
}
export default DefaultTextarea;
