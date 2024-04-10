import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import TableHeader from "../../../components/table/tableHeader/tableHeader";
import TablePagination from "../../../components/table/pagination/pagination";

const TABLE_HEAD = ["Name", "Type", "Occupied beds", "Available beds"];
const TABLE_ROWS = [
    {name: "Neurology", colSpan: 4},
    {name: "NEU-F1", type: "Female", occupied: "20", available: "0",},
    {name: "NEU-F1", type: "Female", occupied: "20", available: "0",},
    {name: "NEU-F1", type: "Female", occupied: "20", available: "0",},
    {name: "Dermatology", colSpan: 4},
    {name: "DER-F1", type: "Female", occupied: "20", available: "0",},
    {name: "DER-F1", type: "Female", occupied: "20", available: "0",},
    {name: "DER-F1", type: "Female", occupied: "20", available: "0",},
    {name: "Orthopedic", colSpan: 4},
    {name: "ORT-F1", type: "Female", occupied: "20", available: "0",},
    {name: "ORT-F1", type: "Female", occupied: "20", available: "0",},
    {name: "ORT-F1", type: "Female", occupied: "20", available: "0",},
];

export function WardTable({buttonName}) {
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
                                name,
                                type,
                                occupied,
                                available,
                                colSpan
                            },
                            index,
                        ) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={`p-4 border-b border-blue-gray-50 ${colSpan ? "bg-themeColor !text-white" : "bg-white"}`}
                                        colSpan={colSpan ? colSpan : 1}>
                                        <div className="flex items-center gap-3">
                                            <Typography
                                                variant="small"
                                                className="font-bold"
                                            >
                                                {name}
                                            </Typography>
                                        </div>
                                    </td>
                                    {type &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {type}
                                            </Typography>
                                        </td>}

                                    {occupied &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {occupied}
                                            </Typography>
                                        </td>}

                                    {available &&
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {available}
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
