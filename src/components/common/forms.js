import React from 'react';

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
