import DefaultInput from "../../../components/inputs/defaultInput";
import React from "react";

const Step2=({})=>{
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-col items-center gap-1"}>
                <span className={"text-xl font-medium text-white"}>Patient Admission</span>
                <span className={"text-md font-light text-white"}>Emergency Contact Details</span>
            </div>
            <div className={"flex flex-col gap-2"}>
                <DefaultInput label={"Name"} placeholder={"Enter Name"}/>
                <DefaultInput label={"Contact Number"} placeholder={"Enter contact number"}/>
                <DefaultInput label={"Email"} placeholder={"Enter Email"}/>
            </div>
        </div>
    )
}
export default Step2;
