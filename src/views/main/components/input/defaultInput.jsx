import {Input} from "@material-tailwind/react";

const DefaultInput = ({label, type, placeholder, onChange, value}) => {
    return (
        <div>
            <Input type={type ? type : "text"} label={label} onChange={onChange} value={value}/>
        </div>
    )
}
export default DefaultInput;
