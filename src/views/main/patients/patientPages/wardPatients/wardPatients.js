import React, { useEffect, useState } from 'react';
import {WardPatientsTable} from "./components/table/table";
import PageHeader from "../../../components/header/pageHeader";
import {SelectInput} from "../../../components/input/selectInput";
import { getWards } from '../../../../../services/wards.service';
import { getPatientsListByWard } from '../../../../../services/patients.service';

const wardsListDemo = [
    {id: 1, value: "Ward 1"},
    {id: 2, value: "Ward 2"},
    {id: 3, value: "Ward 3"},
    {id: 4, value: "Ward 4"},
    {id: 5, value: "Ward 5"}
];
const WardPatients = (props) => {
    const [wardsList, setWardsList] = useState([])
    
    const [ward, setWard] = useState(1)
    const [patients, setPatients] = useState([])

    useEffect(()=>{
        getWards()
            .then((response)=>{
                console.log(response);
                setWardsList(response.data.map(item=>({id: item.id, value: item.name})))
            }).catch((error)=>{
                console.log(error);
            })

        handlePatientsList(1)
    },[])

    const handlePatientsList = (value)=>{
        getPatientsListByWard(value)
                    .then((response)=>{
                        setPatients(response.data)
                    }).catch((error)=>{
                        console.log(error)
                    })
    }
    

    return (
        <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
            <PageHeader title={"All Patients"}/>
            <div className={"flex items-center gap-4 mb-2"}>
                <span>Ward</span>
                <div className={"max-w-[200px]"}>
                    <SelectInput label={"Select Ward"} options={wardsList} value={ward} onChange={(value)=>handlePatientsList(value)}/>
                </div>
            </div>
            <WardPatientsTable data={patients}/>
        </div>
    )
}

export default WardPatients;
