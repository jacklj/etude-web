import React from 'react';
import PropTypes from 'prop-types';
import vextab from 'vextab/releases/vextab-div'; // eslint-disable-line no-unused-vars

import { Name, TeacherWhoCreatedIt } from '../styledComponents';

const Exercise = ({
  details,
  name,
  score,
  teacherWhoCreatedItFirstName,
  teacherWhoCreatedItSurname,
}) => (
  <div>
    <Name>{name}</Name>
    <TeacherWhoCreatedIt>
      {`${teacherWhoCreatedItFirstName} ${teacherWhoCreatedItSurname}`}
    </TeacherWhoCreatedIt>
    {score && (
      <div className="vex-tabdiv" width={350} scale={0.8} editor="false">
        {score}
      </div>
    )}
    <div>{details}</div>
  </div>
);

Exercise.defaultProps = {
  details: undefined,
  score: undefined,
  teacherWhoCreatedItFirstName: undefined,
  teacherWhoCreatedItSurname: undefined,
};

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string,
  score: PropTypes.string,
  teacherWhoCreatedItFirstName: PropTypes.string,
  teacherWhoCreatedItSurname: PropTypes.string,
};

export default Exercise;
