import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {SelectInput} from "../input/selectInput";
import DefaultInput from "../input/defaultInput";

const specialty = [
    "Specialty 1",
    "Specialty 2",
];
const grade = [
    "Grade 1",
    "Grade 2",
];

export function AddDoctorModal({open, setOpen, handleOpen}) {
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Create Doctor</DialogHeader>
            <DialogBody className={"flex flex-col gap-4"}>
                <DefaultInput label={"Name"}/>
                <SelectInput label={"Specialty *"} required options={specialty}/>
                <SelectInput label={"Consultant TeamPatients *"} required options={grade}/>
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
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Submit</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
