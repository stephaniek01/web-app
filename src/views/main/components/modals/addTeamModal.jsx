import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {SelectInput} from "../input/selectInput";
import { getDoctorsList } from "../../../../services/doctors.service";
import { getSpecialityList } from "../../../../services/speciality.service";
import { getWards } from "../../../../services/wards.service";
import { createTeam } from "../../../../services/teams.service";


export function AddTeamModal({open, setOpen, handleOpen}) {
    const [specialityList, setSpecialityList] = useState([])
    const [wardsList, setWardsList] = useState([])
    const [filterDoctorsList, setFilterDoctorsList] = useState([]) // doctors list same for consultants
    const [doctorsList, setDoctorsList] = useState([]) // doctors list same for consultants
    
    const [speciality, setSpeciality] = useState()
    const [wards, setWards] = useState()
    const [doctors, setDoctors] = useState([])
    const [consultant, setConsultant] = useState()

    useEffect(()=>{
        if(open){
            Promise.all([
                getDoctorsList(),
                getSpecialityList(),
                getWards()
            ]).then((response)=>{
                setFilterDoctorsList(response[0].data)
                setSpecialityList(response[1].data.map(item=>({id: item.id, value: item.name})))
                setWardsList(response[2].data.map(item=>({id: item.id, value: item.name})))
            })
        }
    },[open])

    useEffect(()=>{
        let data = filterDoctorsList.find((item)=>item.specialty == speciality.value)
        console.log(speciality, data)
        if(data && data.doctors.length){
            setDoctorsList(data.doctors.map(item=>({id: item.id, value: item.name})))
        }
    },[speciality])

    const submitHandler = ()=>{
        let data = {
            "specialty": speciality,
            "wards" : [wards],
            "doctors": [doctors],
            "consultant": consultant
        }
        createTeam(data)
                .then((response)=>{
                    console.log(response)
                    handleOpen()
                })
                .catch((error)=>{
                    console.log(error)
                })
    }

    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Create Team</DialogHeader>
            <DialogBody className={"flex flex-col gap-4"}>
              <SelectInput value={speciality?.name} onChange={(value)=>setSpeciality(value)} label={"Specialty *"} required options={specialityList}/>
              <SelectInput value={consultant?.name} onChange={(value)=>setConsultant(value)} label={"Consultant TeamPatients *"} required options={doctorsList}/>
              <SelectInput value={doctors?.name} onChange={(value)=>setDoctors(value)} label={"TeamPatients *"} required options={doctorsList}/>
              <SelectInput value={wards?.name} onChange={(value)=>setWards(value)} label={"Assigned Wards *"} required options={wardsList}/>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={ submitHandler }>
                    <span>Submit</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
