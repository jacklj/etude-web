import React from 'react';
import PropTypes from 'prop-types';

import { Label } from '../styledComponents';

const TextInputSection = ({ label, name, value, onChange }) => (
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

TextInputSection.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInputSection;
