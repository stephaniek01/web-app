import { Card, Typography, CardBody, CardFooter} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import { getDoctorsList } from "../../../../../services/doctors.service";

const TABLE_HEAD = ["Name", "Position", "Team"];

export function DoctorTable({buttonName}) {
    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        getDoctorsList()
                    .then((response)=>{
                        console.log(response)
                        setDoctors(response.data)
                    }).catch((error)=>{
                        console.log(error)
                    })
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
                    {doctors.map((item,index) => {
                            const isLast = index === doctors.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <Fragment>
                                    <tr key={index}>
                                        <td className={`p-4 border-b border-blue-gray-50 ${true ? "bg-themeColor !text-white" : "bg-white"}`}
                                            colSpan={4}>
                                            <div className="flex items-center gap-3">
                                                <Link
                                                    to={""}
                                                    variant="small"
                                                    className="font-bold"
                                                >
                                                    {item.specialty}
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    {item.doctors.map((doctor)=>(
                                        <tr>
                                            <td className={classes}>
                                                <Link
                                                    to={"/doctor/detail"}
                                                    state={{item, doctor}}
                                                    variant="small"
                                                    className="font-bold"
                                                >
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {doctor.name}
                                                    </Typography>
                                                </Link>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {doctor.grade}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {doctor.team_name}
                                                </Typography>
                                            </td>
                                        </tr>
                                    ))}
                                </Fragment>
                            );
                        },
                    )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
