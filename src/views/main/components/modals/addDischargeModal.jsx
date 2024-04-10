import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {SelectInput} from "../input/selectInput";
import DefaultTextarea from "../input/defaultTextarea";

const doctor = [
    "Doctor 1",
    "Doctor 2",
];

export function AddTransferModal({open, setOpen, handleOpen}) {
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Transfer Patient</DialogHeader>
            <DialogBody className={"flex flex-col gap-4"}>
              <SelectInput label={"Name Ward *"} required options={doctor}/>
                <DefaultTextarea/>
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
