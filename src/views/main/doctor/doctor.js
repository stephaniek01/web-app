import React, { useState } from 'react';
import { DoctorTable } from './components/table/table';
import PageHeader from '../components/header/pageHeader';
import { AddDoctorModal } from '../components/modals/addDoctorModal';

const Doctor = (props) => {
  const [openDoctor, setOpenDoctor] = useState(false);
  const handleOpenDoctor = () => setOpenDoctor(!openDoctor);

  return (
    <div className={'bg-gray-100 w-full h-[calc(100vh-150px)] p-4'}>
      <PageHeader
        title={'Doctors'}
        // open={openDoctor}
        // handleOpen={handleOpenDoctor}
      />
      <DoctorTable />

      {/* <AddDoctorModal open={openDoctor} handleOpen={handleOpenDoctor} /> */}
    </div>
  );
};

export default Doctor;
