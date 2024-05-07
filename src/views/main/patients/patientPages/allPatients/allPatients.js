import React, {useState} from 'react';
import {AllPatientsTable} from "./components/table/table";
import PageHeader from "../../../components/header/pageHeader";
import { AddPatientModal } from '../../../components/modals/addPatientModal';

const AllPatients = (props) => {
    const [openPatient, setOpenPatient] = useState(false);
    const handleOpenPatient = () => setOpenPatient(!openPatient);

    return (
       <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
           <PageHeader title={"All Patients"} open={openPatient} handleOpen={handleOpenPatient}/>
           <AllPatientsTable/>

           <AddPatientModal open={openPatient} handleOpen={handleOpenPatient}/>
       </div>
    )
}

export default AllPatients;
