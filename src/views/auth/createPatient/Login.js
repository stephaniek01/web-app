import React from 'react'
import DefaultInput from "../../components/inputs/defaultInput";
import DefaultButton from "../../components/buttons/defaultButton";

const CreateDoctor = (props) => {
    return (
        <div className="flex bg-black/10 flex-col p-4 w-[400px] rounded-md gap-2">
            <DefaultInput label={"Name"} placeholder={"Enter Name"}/>
            <DefaultInput label={"Age"} placeholder={"Enter Age"}/>
            <DefaultInput label={"Assign Ward"} placeholder={"Enter Assign Ward"}/>
            <DefaultInput label={"Admission Date"} placeholder={"Enter Admission Date"}/>
            <DefaultInput label={"Guardian Contact Number"} placeholder={"Enter Guardian Contact"}/>
            <DefaultButton name={"Submit"} classnames={"mt-2"}/>
        </div>
    );

}

export default CreateDoctor;
