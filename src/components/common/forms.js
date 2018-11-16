import React from 'react';

import { Label } from './styledComponents';

export const TextInputSection = ({ name, value, onChange }) => (
  <Label>
    {name}:
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </Label>
);
