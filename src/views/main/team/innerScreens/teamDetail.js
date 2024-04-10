import React, {useState} from 'react';
import PageHeader from "../../components/header/pageHeader";

const TeamDetail = (props) => {
    return (
        <div className={"bg-gray-100 w-full h-[calc(100vh-150px)] p-4"}>
            <PageHeader title={"Team NEU-T-1"}/>

            <DetailContent/>

            <div className={"mt-4"}>
                <span className={"text-xl font-bold text-gray-600"}>Doctors</span>
                <div className={"grid grid-cols-3 gap-4"}>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                    <DoctorCard/>
                </div>
            </div>
        </div>
    )
}

const DetailContent = ({specialty, consultant, wards, numDoctor}) => {
    return (
        <div className={"flex flex-col gap-2"}>
            <span>Specialty: {specialty}</span>
            <span>Consultant Doctor: {consultant}</span>
            <span>Wards: {wards}</span>
            <span>Number of Doctors: {numDoctor}</span>
        </div>
    )
}



const DoctorCard = ({specialty, consultant, wards, numDoctor}) => {
    return (
        <div className={"flex flex-col items-center gap-2 bg-gray-600 p-4"}>
            <div className={"w-10 h-10 bg-gray-50 rounded-full"}>

            </div>
            <span>Dr. Marcus Johnson</span>
            <span>Consultant</span>
        </div>
    )
}

export default TeamDetail;
