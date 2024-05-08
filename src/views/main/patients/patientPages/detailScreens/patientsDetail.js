import React, { useState } from 'react';
import PageHeader from '../../../components/header/pageHeader';
import { AddHistoryModal } from '../../../components/modals/addHistoryModal';
import { DetailTable } from './components/table/table';
import { AddTransferModal } from '../../../components/modals/addDischargeModal';
import { AddDischargeModal } from '../../../components/modals/addTransferModal';
import { useLocation } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

const PatientsDetail = (props) => {
  const [openHistory, setOpenHistory] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openDischarge, setOpenDischarge] = useState(false);
  const handleOpenHistory = () => setOpenHistory(!openHistory);
  const handleOpenTransfer = () => setOpenTransfer(!openTransfer);
  const handleOpenDischarge = () => setOpenDischarge(!openTransfer);

  const { state: data } = useLocation();

  console.log(data);

  return (
    <div
      className={'bg-gray-100 w-full h-[calc(100vh-100px)] overflow-y-auto p-4'}
    >
      <PageHeader title={data.name} />
      <DetailContent data={data} />
      <div className={'mt-6'}></div>
      <PageHeader
        title={'Treatment History'}
        // open={openHistory}
        // handleOpen={handleOpenHistory}
      />

      <div className={''}>
        <DetailTable />
        {/* <div className={' flex gap-4'}>
          <button
            className={'bg-themeColor text-white px-4 h-10 rounded-md '}
            onClick={handleOpenTransfer}
          >
            Transfer Ward
          </button>
          <button
            className={'bg-share text-white px-4 h-10 rounded-md '}
            onClick={handleOpenDischarge}
          >
            Discharge
          </button>
        </div> */}
      </div>
      {/* 
      <AddHistoryModal open={openHistory} handleOpen={handleOpenHistory} />
      <AddTransferModal open={openTransfer} handleOpen={handleOpenTransfer} />
      <AddDischargeModal
        open={openDischarge}
        handleOpen={handleOpenDischarge}
      /> */}
    </div>
  );
};

const DetailContent = ({ data }) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <table class="table">
        <tbody>
          <tr>
            <td class="w-1/5 py-1">
              <Typography variant="h6">Current Ward</Typography>
            </td>
            <td class="py-1 text-gray-500">
              <Typography variant="h6">{data.ward}</Typography>
            </td>
          </tr>

          <tr>
            <td class="w-1/5 py-1">
              <Typography variant="h6">Consultant Doctor</Typography>
            </td>
            <td class="py-1 text-gray-500">
              <Typography variant="h6">{data.consultant}</Typography>
            </td>
          </tr>
          <tr>
            <td class="w-1/5 py-1">
              <Typography variant="h6">Team</Typography>
            </td>
            <td class="py-1 text-gray-500">
              <Typography variant="h6">{data.team}</Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PatientsDetail;
