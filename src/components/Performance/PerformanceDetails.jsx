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
import { getLocationSelectOption, getPersonSelectOption } from '../../services/utils';

class PerformanceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingStart: '',
      editingEnd: '',
      editingType: '',
      editingPerformanceType: '',
      editingRating: undefined,
      editingLocation: undefined,
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
    const editingLocation = this.props.location
      && getLocationSelectOption(this.props.location, this.props.locations);

    this.setState({
      isEditing: true,
      editingStart: this.props.start,
      editingEnd: this.props.end,
      editingType: this.props.type,
      editingPerformanceType: this.props.performanceType,
      editingRating: this.props.rating,
      editingLocation,
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
      start: this.state.editingStart,
      end: this.state.editingEnd,
      type: this.state.editingType,
      performance_type: this.state.editingPerformanceType,
      rating: Number(this.state.editingRating),
      location_id: this.state.editingLocation.value,
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
        editingType, editingPerformanceType, editingRating, editingLocation,
      } = this.state;

      jsx = (
        <form onSubmit={this.handleSubmit}>
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
            type:
            <input
              type="text"
              name="editingType"
              value={editingType}
              onChange={this.handleHTMLElementChange}
            />
          </Label>
          <Label>
            performance type:
            <input
              type="text"
              name="editingPerformanceType"
              value={editingPerformanceType}
              onChange={this.handleHTMLElementChange}
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
      const { rating, type, performanceType } = this.props;
      const location = this.props.location
        && getLocationSelectOption(this.props.location, this.props.locations);

      jsx = (
        <form>
          <Label>
            start:
            <DateTime value={start} readOnly />
          </Label>
          <Label>
            end:
            <DateTime value={end} readOnly />
          </Label>
          <Label>
            type:
            <input type="text" name="type" value={type} readOnly />
          </Label>
          <Label>
            performance type:
            <input type="text" name="performanceType" value={performanceType} readOnly />
          </Label>
          <Label>
            rating:
            <StarRatingComponent name="rating" value={rating} starCount={5} readOnly />
          </Label>
          <Label>
            location:
            <Select name="location_id" value={location} options={this.props.locations} readOnly />
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
};

PerformanceDetails.propTypes = {
  eventId: PropTypes.number.isRequired,
  start: PropTypes.string,
  end: PropTypes.string,
  type: PropTypes.string.isRequired,
  performanceType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
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
