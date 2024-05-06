import {
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";
import {Fragment, useEffect, useState} from "react";
import {getWards} from "../../../../../services/wards.service";

const TABLE_HEAD = ["ID", "Name"];
// const TABLE_HEAD = ["Name", "Type", "Occupied beds", "Available beds"];

export function WardTable() {

    const [data, setData] = useState([])
    useEffect(() => {
        getWards().then((res) => {
            setData(res.data)
        })
    }, []);
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
                    {console.log(data,"data")}
                    {data.map((item, index) => {
                            console.log(item)
                            const isLast = index === data.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                            return (
                                <Fragment key={index}>
                                    {/*<tr>*/}
                                    {/*    <td className={`p-4 border-b border-blue-gray-50*/}
                                    {/*     ${true ? "bg-themeColor !text-white" : "bg-white"}`}*/}
                                    {/*        colSpan={4}>*/}
                                    {/*        <div className="flex items-center gap-3">*/}
                                    {/*            <Typography*/}
                                    {/*                variant="small"*/}
                                    {/*                className="font-bold"*/}
                                    {/*            >*/}
                                    {/*                {item.specialty}*/}
                                    {/*            </Typography>*/}
                                    {/*        </div>*/}
                                    {/*    </td>*/}
                                    {/*</tr>*/}
                                        <tr key={item.name}>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {item.id}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {item.name}
                                                </Typography>
                                            </td>
                                            {/*<td className={classes}>*/}
                                            {/*    <Typography*/}
                                            {/*        variant="small"*/}
                                            {/*        color="blue-gray"*/}
                                            {/*        className="font-normal"*/}
                                            {/*    >*/}
                                            {/*        {item.type}*/}
                                            {/*    </Typography>*/}
                                            {/*</td>*/}
                                            {/*<td className={classes}>*/}
                                            {/*    <Typography*/}
                                            {/*        variant="small"*/}
                                            {/*        color="blue-gray"*/}
                                            {/*        className="font-normal"*/}
                                            {/*    >*/}
                                            {/*        {item.occupiedBeds.length}*/}
                                            {/*    </Typography>*/}
                                            {/*</td>*/}
                                            {/*<td className={classes}>*/}
                                            {/*    <Typography*/}
                                            {/*        variant="small"*/}
                                            {/*        color="blue-gray"*/}
                                            {/*        className="font-normal"*/}
                                            {/*    >*/}
                                            {/*        {item.availableBeds.length}*/}
                                            {/*    </Typography>*/}
                                            {/*</td>*/}
                                        </tr>
                                </Fragment>
                            )
                        },
                    )}
                    </tbody>
                </table>
            </CardBody>

        </Card>
    );
}
