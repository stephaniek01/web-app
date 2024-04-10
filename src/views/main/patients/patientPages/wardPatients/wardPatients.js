import React from 'react';
import {WardPatientsTable} from "./components/table/table";
import PageHeader from "../../../components/header/pageHeader";
import {SelectInput} from "../../../components/input/selectInput";

const ward = [
    "Ward 1",
    "Ward 2",
];
const WardPatients = (props) => {

    return (
        <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
            <PageHeader title={"All Patients"}/>
            <div className={"flex items-center gap-4 mb-2"}>
                <span>Ward</span>
                <div className={"max-w-[200px]"}>
                    <SelectInput label={"Select Ward"} options={ward}/>
                </div>
            </div>
            <WardPatientsTable/>

        </div>
    )
}

export default WardPatients;
