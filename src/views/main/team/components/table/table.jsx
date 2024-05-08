import {
  Card,
  Typography,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { Fragment, useEffect, useState } from 'react';
import { getTeams } from '../../../../../services/teams.service';
import { Link } from 'react-router-dom';

const TABLE_HEAD = [
  'Name',
  'No. of Doctors',
  'Consultant TeamPatients',
  'Wards',
];

export function TeamTable({ buttonName }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams()
      .then((response) => {
        setTeams(response.data || []);
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
            {teams.map((specialty, index) => {
              const isLast = index === teams.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <Fragment key={index}>
                  <tr>
                    <td
                      className={`p-4 border-b border-blue-gray-50 ${
                        true ? 'bg-themeColor !text-white' : 'bg-white'
                      }`}
                      colSpan={4}
                    >
                      <div className="flex items-center gap-3">
                        {specialty.specialty}
                      </div>
                    </td>
                  </tr>
                  {specialty.teams.map((team, idx) => (
                    <Fragment key={idx}>
                      <tr className={idx % 2 !== 0 ? 'bg-gray-400' : ''}>
                        <td className={classes}>
                          <Link
                            to={'/doctor/detail'}
                            state={{
                              teamDetails: {
                                ...team,
                                specialty: specialty.specialty,
                              },
                              doctors: [],
                            }}
                            variant="h6"
                            className="font-bold"
                          >
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {team.name}
                            </Typography>
                          </Link>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {team.assigned_doctors.length}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {team.consultant}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {team.assigned_wards.toString() || '-'}
                          </Typography>
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        {/* <TablePagination/> */}
      </CardFooter>
    </Card>
  );
}
