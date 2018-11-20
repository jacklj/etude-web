import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { Label } from '../styledComponents';

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

SelectInputSection.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInputSection;
