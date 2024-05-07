import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter} from "@material-tailwind/react";
import {SelectInput} from "../input/selectInput";
import DefaultInput from "../input/defaultInput";
import { createPatient } from "../../../../services/patients.service";
import { getWards } from "../../../../services/wards.service";

export function AddPatientModal({open, setOpen, handleOpen}) {
    const [wardList, setWardList] = useState([{id:1, value: "ward 1"},{id:2, value:"ward 2"}])
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [ward, setWard] = useState()

    useEffect(()=>{
        Promise.all([
            getWards(),
        ]).then((response)=>{
            // setWardList(response[0].data.map(item=>({id: item.ward_id, value: item.ward_name})))
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const submitHandler = ()=>{
        let data = {
            "name": name,
            "wardId": ward,
            "age": age,
            "gender": gender
        }

        createPatient(data)
                    .then((response)=>{
                        console.log(response)
                        handleOpen()
                    }).catch((error)=>{
                        console.log(error)
                    })
    }

    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Create Patient</DialogHeader>
            <DialogBody className={"flex flex-col gap-4"}>
                <DefaultInput label={"Name"} onChange={(e)=>setName(e.target.value)} value={name}/>
                <SelectInput label={"Ward *"} required options={wardList} onChange={(value)=>setWard(value)} value={ward}/>
                <DefaultInput label={"Age"} onChange={(e)=>setAge(e.target.value)} value={age}/>
                <SelectInput label={"Gender *"} required options={[{id: "male", value:"Male"},{id:"female", value:"Female"}]} onChange={(value)=>setGender(value)} value={gender}/>
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
                <Button variant="gradient" color="green" onClick={submitHandler}>
                    <span>Submit</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
