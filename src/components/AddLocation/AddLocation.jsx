import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addLocationRequest } from '../../redux/locations/locations.actions';
import { TextInputSection } from '../common/forms';

const locationFields = [
  {
    label: 'name',
    name: 'name',
  },
  {
    label: 'address line 1',
    name: 'address_line_1',
  },
  {
    label: 'address line 2',
    name: 'address_line_2',
  },
  {
    label: 'address line 3',
    name: 'address_line_3',
  },
  {
    label: 'town/city',
    name: 'town_city',
  },
  {
    label: 'postcode',
    name: 'postcode',
  },
  {
    label: 'website',
    name: 'website',
  },
];

const generateInitialState = fields => fields.reduce((initialState, field) => ({
  ...initialState,
  [field.name]: '',
}), {});

class AddLocation extends Component {
  constructor(props) {
    super(props);
    // NB all state is assumed to be newlocation fields, so its all dispatched
    // in the addNewLocationRequest action. If you add anything else to the state,
    // change this!
    this.state = generateInitialState(locationFields);

    this.handleHTMLElementChange = this.handleHTMLElementChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.TextInputSection = TextInputSection(this.handleHTMLElementChange);
  }

  handleHTMLElementChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newLocation = { ...this.state };
    this.props.addLocationRequest(newLocation);
  }

  render() {
    return (
      <div>
        <h2>Add new repertoire</h2>
        <form onSubmit={this.handleSubmit}>
          {locationFields.map(field => (
            <TextInputSection
              {...field}
              value={this.state[field.name]}
              onChange={this.handleHTMLElementChange}
            />
          ))}
          {this.props.isCreatingLocation ? (
            <div>Adding location...</div>
          ) : (
            <input type="submit" value="Add location" />
          )}
        </form>
      </div>
    );
  }
}

AddLocation.defaultProps = {};

AddLocation.propTypes = {
  addLocationRequest: PropTypes.func.isRequired,
  composers: PropTypes.array.isRequired, // eslint-disable-line  react/forbid-prop-types
  isCreatingLocation: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isCreatingLocation: state.flags.repertoire.isCreatingLocation,
});

const mapDispatchToProps = {
  addLocationRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddLocation);
