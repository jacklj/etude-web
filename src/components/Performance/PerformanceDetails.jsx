/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import StarRatingComponent from 'react-star-rating-component';
import DateTime from 'react-datetime';
import Select from 'react-select';

import { Label } from '../common/styledComponents';
import { updateEventRequest } from '../../redux/events/events.actions';
import { getAllLocationsRequest } from '../../redux/locations/locations.actions';
import { getAllPeopleRequest } from '../../redux/people/people.actions';
import { selectLocationsForDropdown } from '../../redux/locations/locations.selectors';
import { getLocationSelectOption } from '../../services/utils';
import { EVENT_TYPES } from '../../services/constants';
import {
  createPerformanceTypeSelectOptionObject,
  performanceTypesForSelectInput,
} from '../../services/display';

class PerformanceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingName: '',
      editingStart: '',
      editingEnd: '',
      editingPerformanceType: '',
      editingRating: undefined,
      editingLocation: undefined,
      editingDetails: '',
      isEditing: false,
    };

    this.handleHTMLElementChange = this.handleHTMLElementChange.bind(this);
    this.handleCustomComponentChange = this.handleCustomComponentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePerformanceDetails = this.updatePerformanceDetails.bind(this);
  }

  componentDidMount() {
    this.props.getAllLocationsRequest();
    this.props.getAllPeopleRequest();
  }

  updatePerformanceDetails() {
    // set the editing state to be equal to the performance data in redux (via this.props)
    const editingLocation = this.props.location && getLocationSelectOption(this.props.location, this.props.locations);
    const performanceType = this.props.performanceType
      && createPerformanceTypeSelectOptionObject(this.props.performanceType);
    this.setState({
      isEditing: true,
      editingName: this.props.name || '',
      editingStart: this.props.start,
      editingEnd: this.props.end,
      editingPerformanceType: performanceType,
      editingRating: this.props.rating,
      editingLocation,
      editingDetails: this.props.details || '',
    });
  }

  handleHTMLElementChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleCustomComponentChange(name) {
    return value => this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newPerformance = {
      name: this.state.editingName,
      details: this.state.editingDetails,
      start: this.state.editingStart,
      end: this.state.editingEnd,
      type: EVENT_TYPES.PERFORMANCE,
      performance_type: this.state.editingPerformanceType
        && this.state.editingPerformanceType.value,
      rating: Number(this.state.editingRating),
      location_id: this.state.editingLocation && this.state.editingLocation.value,
    };
    this.props.updateEventRequest(newPerformance, this.props.eventId);
    this.setState({
      isEditing: false,
    });
  }

  render() {
    let jsx;
    if (this.state.isEditing || this.props.isPerformanceUpdating) {
      const editingStart = moment(this.state.editingStart);
      const editingEnd = moment(this.state.editingEnd);
      const {
        editingName,
        editingPerformanceType,
        editingRating,
        editingLocation,
        editingDetails,
      } = this.state;

      jsx = (
        <form onSubmit={this.handleSubmit}>
          <Label>
            name:
            <input
              type="text"
              name="editingName"
              value={editingName}
              onChange={this.handleHTMLElementChange}
            />
          </Label>
          <Label>
            start:
            <DateTime
              value={editingStart}
              onChange={this.handleCustomComponentChange('editingStart')}
            />
          </Label>
          <Label>
            end:
            <DateTime
              value={editingEnd}
              onChange={this.handleCustomComponentChange('editingEnd')}
            />
          </Label>
          <Label>
            performance type:
            <Select
              value={editingPerformanceType}
              onChange={this.handleCustomComponentChange('editingPerformanceType')}
              options={performanceTypesForSelectInput}
            />
          </Label>
          <Label>
            rating:
            <StarRatingComponent
              name="rating"
              value={editingRating}
              starCount={5}
              onStarClick={this.handleCustomComponentChange('editingRating')}
            />
          </Label>
          <Label>
            location:
            <Select
              value={editingLocation}
              onChange={this.handleCustomComponentChange('editingLocation')}
              options={this.props.locations}
            />
          </Label>
          <Label>
            details:
            <textarea
              name="editingDetails"
              value={editingDetails}
              onChange={this.handleHTMLElementChange}
            />
          </Label>
          {this.props.isPerformanceUpdating ? (
            <div>Updating...</div>
          ) : (
            <input type="submit" value="Save details" />
          )}
        </form>
      );
    } else {
      const start = moment(this.props.start); // need to wrap start and end in moment(), ...
      const end = moment(this.props.end); // or DateTime component doesn't work
      const { details, name, rating } = this.props;
      const location = this.props.location
        && getLocationSelectOption(this.props.location, this.props.locations);
      const performanceType = this.props.performanceType
        && createPerformanceTypeSelectOptionObject(this.props.performanceType);
      jsx = (
        <form>
          <Label>
            name:
            <input type="text" name="name" value={name || ''} readOnly />
          </Label>
          <Label>
            start:
            <DateTime value={start} readOnly />
          </Label>
          <Label>
            end:
            <DateTime value={end} readOnly />
          </Label>
          <Label>
            performance type:
            <Select
              name="performance_type"
              value={performanceType}
              options={performanceTypesForSelectInput}
              readOnly
            />
          </Label>
          <Label>
            rating:
            <StarRatingComponent name="rating" value={rating} starCount={5} readOnly />
          </Label>
          <Label>
            location:
            <Select name="location_id" value={location} options={this.props.locations} readOnly />
          </Label>
          <Label>
            details:
            <textarea
              name="details"
              value={details || ''}
              readOnly
            />
          </Label>
          <button type="button" onClick={this.updatePerformanceDetails}>
            Edit
          </button>
        </form>
      );
    }
    return jsx;
  }
}

PerformanceDetails.defaultProps = {
  start: undefined,
  end: undefined,
  rating: undefined,
  location: undefined,
  name: undefined,
  details: undefined,
  performanceType: undefined,
};

PerformanceDetails.propTypes = {
  eventId: PropTypes.number.isRequired,
  start: PropTypes.string,
  end: PropTypes.string,
  performanceType: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.string,
  rating: PropTypes.number,
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  isPerformanceUpdating: PropTypes.bool.isRequired,
  locations: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  updateEventRequest: PropTypes.func.isRequired,
  getAllLocationsRequest: PropTypes.func.isRequired,
  getAllPeopleRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  // ownProps isn't recursive - just props supplied from 'above'
  locations: selectLocationsForDropdown(state),
  isPerformanceUpdating: state.flags.events.updatingEvent,
});

const mapDispatchToProps = {
  updateEventRequest,
  getAllLocationsRequest,
  getAllPeopleRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PerformanceDetails);
