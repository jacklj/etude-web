import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectTeachersForDropdown } from '../../redux/people/people.selectors';
import { addExerciseRequest } from '../../redux/exercises/exercises.actions';
import { FIELD_TYPES } from '../common/Form/helpers';
import Form from '../common/Form/Form';

const AddExercise = props => (
  <div>
    <h2>Add new repertoire</h2>
    <Form
      fields={[
        {
          label: 'name',
          name: 'name',
          type: FIELD_TYPES.TEXT,
        },
        {
          label: 'score',
          name: 'score',
          type: FIELD_TYPES.SCORE,
        },
        {
          label: 'range: lowest note',
          name: 'range_lowest_note',
          type: FIELD_TYPES.TEXT,
        },
        {
          label: 'range: highest note',
          name: 'range_highest_note',
          type: FIELD_TYPES.TEXT,
        },
        {
          label: 'details',
          name: 'details',
          type: FIELD_TYPES.TEXTAREA,
        },
        {
          label: 'teacher who created it',
          name: 'teacher_who_created_it_id',
          type: FIELD_TYPES.SELECT,
          options: props.teachers,
        },
      ]}
      addEntityRequest={props.addExerciseRequest}
      isCreatingFlag={props.isCreatingRepertoire}
      loadingMessage="Adding repertoire..."
      submitButtonText="Add repertoire"
    />
  </div>
);


AddExercise.defaultProps = {};

AddExercise.propTypes = {
  addExerciseRequest: PropTypes.func.isRequired,
  teachers: PropTypes.array.isRequired, // eslint-disable-line  react/forbid-prop-types
  isCreatingRepertoire: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  teachers: selectTeachersForDropdown(state),
  isCreatingRepertoire: state.flags.repertoire.isCreatingRepertoire,
});

const mapDispatchToProps = {
  addExerciseRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExercise);
