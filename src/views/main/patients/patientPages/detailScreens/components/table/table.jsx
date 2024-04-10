import {
    Card,
    Typography,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import TablePagination from "../../../../../components/table/pagination/pagination";
import doctor from "../../../../../doctor/doctor";

const TABLE_HEAD = ["Doctor", "Grade", "Team", "Consultent"];
const TABLE_ROWS = [
    {doctor: "Ward NEU-M1", colSpan: 4},
    {doctor: "Dr. Marcus Johnson",link:"/teams/detail", grade: "Consultant", team: "NEU-F1",},
    {doctor: "Dr. Marcus Johnson",link:"/teams/detail", grade: "Consultant", team: "NEU-F1",},
    {doctor: "Ward NEU-M1", colSpan: 4},
    {doctor: "Dr. Marcus Johnson",link:"/teams/detail", grade: "Consultant", team: "NEU-F1",},
    {doctor: "Dr. Marcus Johnson",link:"/teams/detail", grade: "Consultant", team: "NEU-F1",},
];

export function DetailTable({buttonName}) {
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
                    {TABLE_ROWS.map(
                        (
                            {
                                doctor,
                                link,
                                grade,
                                team,
                                consultent,
                                colSpan
                            },
                            index,
                        ) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={doctor}>
                                    <td className={`p-4 border-b border-blue-gray-50 ${colSpan ? "bg-themeColor !text-white" : "bg-white"}`}
                                        colSpan={colSpan ? colSpan : 1}>
                                        <div className="flex items-center gap-3">
                                            <Link
                                                to={link}
                                                variant="small"
                                                className="font-bold"
                                            >
                                                {doctor}
                                            </Link>
                                        </div>
                                    </td>
                                    {grade &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {grade}
                                            </Typography>
                                        </td>}

                                    {team &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {team}
                                            </Typography>
                                        </td>}

                                    {consultent &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {consultent}
                                            </Typography>
                                        </td>}
                                </tr>
                            )
                                ;
                        },
                    )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <TablePagination/>
            </CardFooter>
        </Card>
    );
}
