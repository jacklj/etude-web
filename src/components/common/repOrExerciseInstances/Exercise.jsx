import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import vextab from 'vextab/releases/vextab-div'; // eslint-disable-line no-unused-vars

import { Name, TeacherWhoCreatedIt } from '../styledComponents';
import { selectExercise } from '../../../redux/exercises/exercises.selectors';

const Exercise = ({
  exercise,
}) => {
  if (!exercise) return null;
  const {
    details,
    name,
    score,
    teacherWhoCreatedIt,
  } = exercise;
  const { first_name: firstName, surname } = teacherWhoCreatedIt;

  return (
    <div>
      <Name>{name}</Name>
      {teacherWhoCreatedIt
        && <TeacherWhoCreatedIt>{`${firstName} ${surname}`}</TeacherWhoCreatedIt>}
      {score && (
        <div className="vex-tabdiv" width={350} scale={0.8} editor="false">
          {score}
        </div>
      )}
      <div>{details}</div>
    </div>
  );
};

Exercise.defaultProps = {
  exercise: undefined,
};

Exercise.propTypes = {
  exercise: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, ownProps) => ({
  exercise: selectExercise(state, ownProps),
});

export default connect(mapStateToProps)(Exercise);
