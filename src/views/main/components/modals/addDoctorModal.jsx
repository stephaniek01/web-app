import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { SelectInput } from '../input/selectInput';
import DefaultInput from '../input/defaultInput';
import { getSpecialityList } from '../../../../services/speciality.service';
import { getGradeList } from '../../../../services/grades.service';
import { createDoctor } from '../../../../services/doctors.service';

export function AddDoctorModal({ open, setOpen, handleOpen }) {
  const [specialityList, setSpecialityList] = useState([]);
  const [gradeList, setGradeList] = useState([]);

  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [speciality, setSpeciality] = useState('');

  useEffect(() => {
    Promise.all([getSpecialityList(), getGradeList()])
      .then((response) => {
        setSpecialityList(
          response[0].data.map((item) => ({
            id: item.id,
            value: item.name, // Changed value to name
          }))
        );
        setGradeList(
          response[1].data.map((item) => ({
            id: item.id,
            value: item.name, // Changed value to name
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submitHandler = () => {
    let data = {
      name: name,
      specialty: speciality,
      grade: grade,
    };
    createDoctor(data)
      .then((response) => {
        console.log(response);
        handleOpen();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(grade, 'specialityList');
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Create Doctor</DialogHeader>
      <DialogBody className={'flex flex-col gap-4'}>
        <DefaultInput
          label={'Name'}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <SelectInput
          label={'Specialty *'}
          required
          options={specialityList}
          onChange={(value) => setSpeciality(value)}
          value={speciality}
        />
        <SelectInput
          label={'Grade *'}
          required
          options={gradeList}
          onChange={(value) => setGrade(value)}
          value={grade}
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
