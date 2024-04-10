import React from 'react';
import {TeamPatientsTable} from "./components/table/table";
import PageHeader from "../../../components/header/pageHeader";
import {SelectInput} from "../../../components/input/selectInput";

const team = [
    "Team 1",
    "Team 2",
];
const TeamPatients = (props) => {

    return (
        <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
            <PageHeader title={"All Patients"}/>
            <div className={"flex items-center gap-4 mb-2"}>
                <span>Team</span>
                <div className={"max-w-[200px]"}>
                    <SelectInput label={"Select Ward"} options={team}/>
                </div>
            </div>
            <TeamPatientsTable/>

        </div>
    )
}

export default TeamPatients;
