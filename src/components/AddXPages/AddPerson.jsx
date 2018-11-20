import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addPersonRequest } from '../../redux/people/people.actions';
import Form from '../common/Form/Form';
import { FIELD_TYPES } from '../common/Form/helpers';

const addPersonFields = [
  {
    label: 'first name',
    name: 'first_name',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'surname',
    name: 'surname',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'role',
    name: 'role',
    type: FIELD_TYPES.TEXT,
  },
];

const AddPerson = props => (
  <div>
    <h2>Add a person</h2>
    <Form
      fields={addPersonFields}
      addEntityRequest={props.addPersonRequest}
      isCreatingFlag={props.creatingPerson}
      loadingMessage="Adding person..."
      submitButtonText="Add person"
    />
  </div>
);


AddPerson.defaultProps = {};

AddPerson.propTypes = {
  addPersonRequest: PropTypes.func.isRequired,
  creatingPerson: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  creatingPerson: state.flags.people.creatingPerson,
});

const mapDispatchToProps = {
  addPersonRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPerson);
