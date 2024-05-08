import {
  Card,
  Typography,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ['Name', 'Ward', 'Room No', 'Consultant Doctor'];

export function TeamPatientsTable({ data }) {
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
                    variant="h6"
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
            {data.map((item, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr
                  key={index}
                  className={index % 2 !== 0 ? 'bg-gray-400' : ''}
                >
                  <td
                    className={`p-4 border-b border-blue-gray-50`}
                    colSpan={1}
                  >
                    <div className="flex items-center gap-3">
                      <Link
                        to={'/all-patients/detail'}
                        state={item}
                        variant="h6"
                      >
                        {item.name}
                      </Link>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.ward}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.room_number}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.consultant}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
