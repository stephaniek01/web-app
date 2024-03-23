import DefaultInput from "../../../components/inputs/defaultInput";
import React from "react";
import SelectInput from "../../../components/inputs/selectInput";

const gender = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
    {value: 'other', label: 'Other'},
];
const Step1 = ({}) => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-col items-center gap-1"}>
                <span className={"text-xl font-medium text-white"}>Patient Admission</span>
                <span className={"text-md font-light text-white"}>Patient Details</span>
            </div>
            <div className={"flex flex-col gap-2"}>
                <DefaultInput label={"Name"} placeholder={"Enter Name"}/>
                <DefaultInput label={"Age"} placeholder={"Enter your age"}/>
                <SelectInput label={"Gender"} options={gender} includeDefault/>
                <DefaultInput label={"Contact Number"} placeholder={"Enter contact number"}/>
            </div>
        </div>
    )
}
export default Step1;
