import React, {useState} from 'react';
import PageHeader from "../../components/header/pageHeader";
import { useLocation } from 'react-router-dom';

const DoctorDetail = (props) => {
    const { state: data } = useLocation()
    const {item: mainData, doctor} = data

    return (
        <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
            <PageHeader title={"Team NEU-T-1"}/>

            <DetailContent mainData={mainData} doctor={doctor}/>

            <div className={"mt-4"}>
                <span className={"text-xl font-bold text-gray-600"}>Doctors</span>
                <div className={"grid grid-cols-3 gap-4"}>
                    {!!mainData.doctors.length && mainData.doctors.map((doc)=><DoctorCard data={doc}/>)}
                </div>
            </div>
        </div>
    )
}

const DetailContent = ({mainData, doctor}) => {
    return (
        <div className={"flex flex-col gap-2"}>
            <span>Specialty: {mainData.specialty}</span>
            <span>Consultant Doctor: {doctor.grade}</span>
            <span>Team Name: {doctor.team_name}</span>
            <span>Number of Doctors: {mainData.doctors.length}</span>
        </div>
    )
}



const DoctorCard = ({data}) => {
    return (
        <div className={"flex flex-col items-center gap-2 bg-gray-600 p-4"}>
            <div className={"w-10 h-10 bg-gray-50 rounded-full"}>

            </div>
            <span>{data.name}</span>
            <span>{data.grade}</span>
        </div>
    )
}

export default DoctorDetail;
