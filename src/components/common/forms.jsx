import React from 'react';
import Select from 'react-select';

import { Label } from './styledComponents';

export const TextInputSection = ({ label, name, value, onChange }) => (
  <Label>
    {label}:
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </Label>
);

export const SelectInputSection = ({ label, value, options, onChange }) => (
  <Label>
    {label}:
    <Select
      value={value}
      onChange={onChange}
      options={options}
    />
  </Label>
);
