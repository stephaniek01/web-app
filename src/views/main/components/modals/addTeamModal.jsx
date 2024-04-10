import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {SelectInput} from "../input/selectInput";

const specialty = [
    "Specialty 1",
    "Specialty 2",
];
const consultant = [
    "Consultant 1",
    "Consultant 2",
];
const doctor = [
    "TeamPatients 1",
    "TeamPatients 2",
];
const ward = [
    "Assigned ward 1",
    "Assigned ward 2",
];

export function AddTeamModal({open, setOpen, handleOpen}) {
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Create Team</DialogHeader>
            <DialogBody className={"flex flex-col gap-4"}>
              <SelectInput label={"Specialty *"} required options={specialty}/>
              <SelectInput label={"Consultant TeamPatients *"} required options={consultant}/>
              <SelectInput label={"TeamPatients *"} required options={doctor}/>
              <SelectInput label={"Assigned Wards *"} required options={ward}/>
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
