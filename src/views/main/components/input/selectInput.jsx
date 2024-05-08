import { Select, Option } from '@material-tailwind/react';
import React from 'react';

export function SelectInput({ options, label, onChange, value }) {
  return (
    <div className="w-full">
      <Select label={label} value={value} onChange={onChange} required>
        {options.map((option, index) => (
          <Option value={option.id} key={index}>
            {option.value}
          </Option> // Changed key={option.id} to key={index}
        ))}
      </Select>
    </div>
  );
}
