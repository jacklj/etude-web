import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addLocationRequest } from '../../redux/locations/locations.actions';
import Form from '../common/Form';
import { FIELD_TYPES } from '../common/forms.jsx';

const addLocationFields = [
  {
    label: 'name',
    name: 'name',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'address line 1',
    name: 'address_line_1',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'address line 2',
    name: 'address_line_2',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'address line 3',
    name: 'address_line_3',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'town/city',
    name: 'town_city',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'postcode',
    name: 'postcode',
    type: FIELD_TYPES.TEXT,
  },
  {
    label: 'website',
    name: 'website',
    type: FIELD_TYPES.TEXT,
  },
];

const AddLocation = props => (
  <div>
    <h2>Add new repertoire</h2>
    <Form
      fields={addLocationFields}
      addEntityRequest={props.addLocationRequest}
      isCreatingFlag={props.creatingLocation}
      loadingMessage="Adding location..."
      submitButtonText="Add location"
    />
  </div>
);


AddLocation.defaultProps = {};

AddLocation.propTypes = {
  addLocationRequest: PropTypes.func.isRequired,
  creatingLocation: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  creatingLocation: state.flags.locations.creatingLocation,
});

const mapDispatchToProps = {
  addLocationRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddLocation);
