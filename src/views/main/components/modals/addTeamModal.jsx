import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { SelectInput } from '../input/selectInput';
import { getDoctorsList } from '../../../../services/doctors.service';
import { getSpecialityList } from '../../../../services/speciality.service';
import { getWardList, getWards } from '../../../../services/wards.service';
import { createTeam } from '../../../../services/teams.service';

export function AddTeamModal({ open, setOpen, handleOpen }) {
  const [specialityList, setSpecialityList] = useState([]);
  const [wardsList, setWardsList] = useState([]);
  const [filterDoctorsList, setFilterDoctorsList] = useState([]); // doctors list same for consultants
  const [doctorsList, setDoctorsList] = useState([]); // doctors list same for consultants

  const [speciality, setSpeciality] = useState();
  const [wards, setWards] = useState();
  const [doctors, setDoctors] = useState();
  const [consultant, setConsultant] = useState();

  useEffect(() => {
    if (open) {
      Promise.all([getDoctorsList(), getSpecialityList(), getWardList()]).then(
        (response) => {
          setFilterDoctorsList(response[0].data);
          setSpecialityList(
            response[1].data.map((item) => ({ id: item.id, value: item.name }))
          );
          setWardsList(
            response[2].data.map((item) => ({ id: item.id, value: item.name }))
          );
        }
      );
    }
  }, [open]);

  useEffect(() => {
    let specialityName = specialityList.find(
      (item) => item.id == speciality
    )?.value;
    console.log(speciality, specialityName);
    let data = filterDoctorsList.find(
      (item) => item.specialty == specialityName
    );
    if (data && data.doctors.length) {
      setDoctorsList(
        data.doctors.map((item) => ({ id: item.id, value: item.name }))
      );
    }
  }, [speciality]);

  const submitHandler = () => {
    let data = {
      specialty: speciality,
      wards: [wards],
      doctors: [doctors],
      consultant: consultant,
    };
    createTeam(data)
      .then((response) => {
        console.log(response);
        handleOpen();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Create Team</DialogHeader>
      <DialogBody className={'flex flex-col gap-4'}>
        <SelectInput
          onChange={(value) => setSpeciality(value)}
          label={'Specialty*'}
          required
          options={specialityList}
        />
        <SelectInput
          onChange={(value) => setConsultant(value)}
          label={'Consultant*'}
          required
          options={doctorsList}
        />
        <SelectInput
          onChange={(value) => setDoctors(value)}
          label={'TeamPatients *'}
          required
          options={doctorsList}
        />
        <SelectInput
          onChange={(value) => setWards(value)}
          label={'Assigned Wards *'}
          required
          options={wardsList}
        />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="teal" onClick={submitHandler}>
          <span>Submit</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
