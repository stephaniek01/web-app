import { Card, Typography, CardBody, CardFooter} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatientsList } from "../../../../../../../services/patients.service";

const TABLE_HEAD = ["Name", "Ward", "Room No","Consultant Doctor"];

export function AllPatientsTable({buttonName}) {
    const [patients, setPatients] = useState([])

    useEffect(()=>{
        getPatientsList().then(response=>setPatients(response.data))
    },[])

    return (
        <Card className="h-full w-full shadow-none border border-gray-100">
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {patients.map((patient,index) => {
                            const isLast = index === patients.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={index}>
                                    <td className={`p-4 border-b border-blue-gray-50 ${false ? "bg-themeColor !text-white" : "bg-white"}`}
                                        colSpan={1}>
                                        <div className="flex items-center gap-3">
                                            <Link
                                                to={"/all-patients/detail"}
                                                state={patient}
                                                variant="small"
                                                className="font-bold"
                                            >
                                                {patient.name}
                                            </Link>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {patient.ward}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {patient.room_number}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {patient.team}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        },
                    )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
