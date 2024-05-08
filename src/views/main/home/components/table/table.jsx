import {
  Card,
  Typography,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getWards } from '../../../../../services/wards.service';

const TABLE_HEAD = ['Name', 'Type', 'Occupied beds', 'Available beds'];

export function WardTable() {
  const [wards, setWards] = useState([]);

  useEffect(() => {
    getWards()
      .then((response) => {
        setWards(response.data || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Card className="h-full w-full shadow-none border border-gray-100">
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
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
            {wards.map((specialty, index) => (
              <Fragment key={index}>
                <tr className="">
                  <td
                    className={`p-3 border-b border-blue-gray-50 ${
                      true ? 'bg-themeColor !text-white' : 'bg-white'
                    }`}
                    colSpan={4}
                  >
                    <div className="flex items-center gap-3">
                      <Link to={''} variant="small" className="font-bold">
                        {specialty.specialty}
                      </Link>
                    </div>
                  </td>
                </tr>
                {specialty.wards.map((ward, idx) => (
                  <Fragment key={idx}>
                    <tr className={idx % 2 !== 0 ? 'bg-gray-400' : ''}>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ward.name}
                        </Typography>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ward.type.charAt(0).toUpperCase() +
                            ward.type.slice(1)}
                        </Typography>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ward.occupiedBeds.length || '-'}
                        </Typography>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ward.availableBeds.length || '-'}
                        </Typography>
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        {/* <TablePagination/> */}
      </CardFooter>
    </Card>
  );
}
