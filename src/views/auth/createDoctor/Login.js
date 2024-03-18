import React from 'react'
import DefaultInput from "../../components/inputs/defaultInput";
import DefaultButton from "../../components/buttons/defaultButton";

const CreatePatient = (props) => {
    return (
        <div className="flex bg-black/10 flex-col p-4 w-[400px] rounded-md gap-2">
            <DefaultInput label={"Name"} placeholder={"Enter Name"}/>
            <DefaultInput label={"Role"} placeholder={"Enter Role"}/>
            <DefaultInput label={"Team Affiliation"} placeholder={"Enter Affiliation"}/>
            <DefaultInput label={"Email ID"} placeholder={"Enter Email ID"}/>
            <DefaultButton name={"Submit"} classnames={"mt-2"}/>
        </div>
    );

}

export default CreatePatient;
