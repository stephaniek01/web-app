import React, { useState } from 'react';
import { TeamTable } from './components/table/table';
import PageHeader from '../components/header/pageHeader';
import { AddTeamModal } from '../components/modals/addTeamModal';

const Teams = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className={'bg-gray-100 w-full h-[calc(100vh-150px)] p-4'}>
      <PageHeader
        title={'Teams'}
        //    open={open}
        //    handleOpen={handleOpen}
      />
      <TeamTable />

      <AddTeamModal open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default Teams;
