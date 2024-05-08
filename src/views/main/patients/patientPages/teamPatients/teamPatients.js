import React, { useEffect, useState } from 'react';
import { TeamPatientsTable } from './components/table/table';
import PageHeader from '../../../components/header/pageHeader';
import { SelectInput } from '../../../components/input/selectInput';
import { getTeams } from '../../../../../services/teams.service';
import { getPatientsListByTeam } from '../../../../../services/patients.service';

const teamsListDemo = [
  { id: 1, value: 'team 1' },
  { id: 2, value: 'team 2' },
  { id: 3, value: 'team 3' },
  { id: 4, value: 'team 4' },
  { id: 5, value: 'team 5' },
];

const TeamPatients = (props) => {
  const [teamsList, setTeamsList] = useState(teamsListDemo);

  const [team, setTeam] = useState(1);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getTeams()
      .then((response) => {
        const teams = [];
        response.data.forEach((specialty) => {
          const specialtyTeams = specialty.teams;

          specialtyTeams.forEach(({ id, name }) => {
            teams.push({
              id,
              value: name,
            });
          });
        });
        setTeamsList(teams);
      })
      .catch((error) => {
        console.log(error);
      });
    handlePatientsList(1);
  }, []);

  const handlePatientsList = (value) => {
    getPatientsListByTeam(value)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={'bg-gray-100 w-full h-[calc(100vh-150px)] p-4'}>
      <PageHeader title={'View Patients by Team'} />
      <div className={'flex items-center gap-4 mb-2'}>
        <div className={'max-w-[200px]'}>
          <SelectInput
            label={'Team'}
            options={teamsList}
            value={team}
            onChange={(value) => handlePatientsList(value)}
          />
        </div>
      </div>
      <TeamPatientsTable data={patients} />
    </div>
  );
};

export default TeamPatients;
