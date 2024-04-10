import React from 'react';
import {AllPatientsTable} from "./components/table/table";
import PageHeader from "../../../components/header/pageHeader";
const AllPatients = (props) => {

    return (
       <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
           <PageHeader title={"All Patients"}  />
           <AllPatientsTable/>
       </div>
    )
}

export default AllPatients;
