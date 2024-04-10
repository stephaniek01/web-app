import { Select, Option } from "@material-tailwind/react";
import React from 'react';

export function SelectInput({ options ,label}) {
    return (
        <div className="w-full">
            <Select label={label}>
                {options.map((option, index) => (
                    <Option key={index}>{option}</Option>
                ))}
            </Select>
        </div>
    );
}
