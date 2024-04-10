import {Input} from "@material-tailwind/react";

const DefaultInput = ({label, type, placeholder}) => {
    return (
        <div>
            <Input type={type ? type : "text"} label={label}/>
        </div>
    )
}
export default DefaultInput;
