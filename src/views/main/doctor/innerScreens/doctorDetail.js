import React from 'react';
import PageHeader from '../../components/header/pageHeader';
import { useLocation } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

const DoctorDetail = (props) => {
  const { state: data } = useLocation();
  const { item: mainData, doctor, teamDetails } = data;

  console.log(teamDetails.assigned_doctors);

  return (
    <div className={'bg-gray-100 w-full h-[calc(100vh-150px)] p-4'}>
      <PageHeader title={`Team ${teamDetails.name}`} />

      <DetailContent
        mainData={mainData}
        doctor={doctor}
        teamDetails={teamDetails}
      />

      <div className={'mt-6'}>
        <span className={'text-3xl'}>Doctors</span>
        <div className={'grid grid-cols-3 gap-8 mt-4'}>
          {teamDetails?.assigned_doctors?.length &&
            teamDetails?.assigned_doctors.map((doc) => (
              <DoctorCard data={doc} />
            ))}
        </div>
      </div>
    </div>
  );
};

const DetailContent = ({ mainData, doctor, teamDetails }) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <table class="table">
        <tbody>
          <tr>
            <td class="w-1/5 py-1">
              <Typography variant="h6">Specialty</Typography>
            </td>
            <td class="py-1 text-gray-500">
              <Typography variant="h6">{teamDetails.specialty}</Typography>
            </td>
          </tr>

          <tr>
            <td class="w-1/5 py-1">
              <Typography variant="h6">Consultant Doctor</Typography>
            </td>
            <td class="py-1 text-gray-500">
              <Typography variant="h6">{teamDetails.consultant}</Typography>
            </td>
          </tr>
          <tr>
            <td class="w-1/5 py-1">
              <Typography variant="h6">Team Name</Typography>
            </td>
            <td class="py-1 text-gray-500">
              <Typography variant="h6">{teamDetails.name}</Typography>
            </td>
          </tr>
          <tr>
            <td class="w-1/5 py-1">
              <Typography variant="h6"> Number of Doctors</Typography>
            </td>
            <td class="py-1 text-gray-500">
              <Typography variant="h6">
                {teamDetails?.assigned_doctors?.length}
              </Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const DoctorCard = ({ data }) => {
  return (
    <div
      className={
        'flex flex-col items-center gap-3 bg-gray-400 px-4 py-6 shadow-lg'
      }
    >
      <img
        alt="doctor"
        src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
        className={'w-40 h-40 block rounded-full'}
      />
      <span>{data.name}</span>
      <span>{data.grade}</span>
    </div>
  );
};

export default DoctorDetail;
