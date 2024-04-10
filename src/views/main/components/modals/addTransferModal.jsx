import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import DefaultTextarea from "../input/defaultTextarea";

export function AddDischargeModal({open, setOpen, handleOpen}) {
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Discharge Patient</DialogHeader>
            <DialogBody className={"flex flex-col gap-4"}>
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
