import React from 'react';

import vextab from 'vextab/releases/vextab-div'; // eslint-disable-line no-unused-vars

const ScoreInput = ({ name, value, onChange }) => (
  <div>
    <div className="vex-tabdiv" width={300} height={60} scale={0.8} editor="false">
      {value}
    </div>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default ScoreInput;
