import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import Select from 'react-select';

import { Label } from '../common/styledComponents';
import { updateEventRequest } from '../../redux/events/events.actions';
import { getAllLocationsRequest } from '../../redux/locations/locations.actions';
import { selectLocationsForDropdown } from '../../redux/locations/locations.selectors';
import { getLocationSelectOption } from '../../services/utils';

class PracticeSessionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingRating: undefined,
      editingLocation: undefined,
      isEditing: false,
    };

    this.handleHTMLElementChange = this.handleHTMLElementChange.bind(this);
    this.handleCustomComponentChange = this.handleCustomComponentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePracticeSessionDetails = this.updatePracticeSessionDetails.bind(this);
  }

  componentDidMount() {
    this.props.getAllLocationsRequest();
  }

  updatePracticeSessionDetails() {
    // set the editing state to be equal to the practiceSession data in redux (via this.props)
    const editingLocation = this.props.location
      && getLocationSelectOption(this.props.location, this.props.locations);

    this.setState({
      isEditing: true,
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

    const updatedEvent = {
      rating: Number(this.state.editingRating),
      location_id: this.state.editingLocation.value,
    };
    this.props.updateEventRequest(updatedEvent, this.props.eventId);
    this.setState({
      isEditing: false,
    });
  }

  render() {
    let jsx;
    if (this.state.isEditing || this.props.isPracticeSessionUpdating) {
      const { editingRating, editingLocation } = this.state;

      jsx = (
        <form onSubmit={this.handleSubmit}>
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
          {this.props.isPracticeSessionUpdating ? (
            <div>Updating...</div>
          ) : (
            <input type="submit" value="Save details" />
          )}
        </form>
      );
    } else {
      const { rating } = this.props;
      const location = this.props.location
        && getLocationSelectOption(this.props.location, this.props.locations);

      jsx = (
        <form>
          <Label>
            rating:
            <StarRatingComponent name="rating" value={rating} starCount={5} readOnly />
          </Label>
          <Label>
            location:
            <Select name="location_id" value={location} options={this.props.locations} readOnly />
          </Label>
          <button type="button" onClick={this.updatePracticeSessionDetails}>
            Edit
          </button>
        </form>
      );
    }
    return jsx;
  }
}

PracticeSessionDetails.defaultProps = {
  rating: undefined,
  location: undefined,
};

PracticeSessionDetails.propTypes = {
  eventId: PropTypes.number.isRequired,
  rating: PropTypes.number,
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  isPracticeSessionUpdating: PropTypes.bool.isRequired,
  locations: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  updateEventRequest: PropTypes.func.isRequired,
  getAllLocationsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  // ownProps isn't recursive - just props supplied from 'above'
  locations: selectLocationsForDropdown(state),
  isPracticeSessionUpdating: state.flags.updatingEvent,
});

const mapDispatchToProps = {
  updateEventRequest,
  getAllLocationsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PracticeSessionDetails);
