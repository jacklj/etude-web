import React from 'react';
import PropTypes from 'prop-types';
import vextab from 'vextab/releases/vextab-div'; // eslint-disable-line no-unused-vars

import { Card, Name, TeacherWhoCreatedIt } from './common/itemCards';

const Exercise = ({
  details,
  name,
  score,
  teacherWhoCreatedItFirstName,
  teacherWhoCreatedItSurname,
}) => (
  <Card>
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
  </Card>
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
