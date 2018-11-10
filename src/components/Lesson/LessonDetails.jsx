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
import { selectTeachersForDropdown } from '../../redux/people/people.selectors';
import { getLocationSelectOption, getPersonSelectOption } from '../../services/utils';
import { EVENT_TYPES } from '../../services/constants';

class LessonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingStart: '',
      editingEnd: '',
      editingRating: undefined,
      editingLocation: undefined,
      editingTeacher: undefined,
      isEditing: false,
    };

    this.handleHTMLElementChange = this.handleHTMLElementChange.bind(this);
    this.handleCustomComponentChange = this.handleCustomComponentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateLessonDetails = this.updateLessonDetails.bind(this);
  }

  componentDidMount() {
    this.props.getAllLocationsRequest();
    this.props.getAllPeopleRequest();
  }

  updateLessonDetails() {
    // set the editing state to be equal to the lesson data in redux (via this.props)
    const editingLocation = this.props.location
      && getLocationSelectOption(this.props.location, this.props.locations);
    const editingTeacher = this.props.teacher
      && getPersonSelectOption(this.props.teacher, this.props.teachers);

    this.setState({
      isEditing: true,
      editingStart: this.props.start,
      editingEnd: this.props.end,
      editingRating: this.props.rating,
      editingLocation,
      editingTeacher,
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

    const newLesson = {
      start: this.state.editingStart,
      end: this.state.editingEnd,
      type: EVENT_TYPES.LESSON,
      rating: Number(this.state.editingRating),
      location_id: this.state.editingLocation.value,
      teacher_id: this.state.editingTeacher.value,
    };
    this.props.updateEventRequest(newLesson, this.props.eventId);
    this.setState({
      isEditing: false,
    });
  }

  render() {
    let jsx;
    if (this.state.isEditing || this.props.isLessonUpdating) {
      const editingStart = moment(this.state.editingStart);
      const editingEnd = moment(this.state.editingEnd);
      const {
        editingRating, editingLocation, editingTeacher,
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
            teacher:
            <Select
              value={editingTeacher}
              onChange={this.handleCustomComponentChange('editingTeacher')}
              options={this.props.teachers}
            />
          </Label>
          {this.props.isLessonUpdating ? (
            <div>Updating...</div>
          ) : (
            <input type="submit" value="Save details" />
          )}
        </form>
      );
    } else {
      const start = moment(this.props.start); // need to wrap start and end in moment(), ...
      const end = moment(this.props.end); // or DateTime component doesn't work
      const { rating } = this.props;
      const teacher = this.props.teacher
        && getPersonSelectOption(this.props.teacher, this.props.teachers);
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
            rating:
            <StarRatingComponent name="rating" value={rating} starCount={5} readOnly />
          </Label>
          <Label>
            location:
            <Select name="location_id" value={location} options={this.props.locations} readOnly />
          </Label>
          <Label>
            teacher:
            <Select name="teacher_id" value={teacher} options={this.props.teachers} readOnly />
          </Label>
          <button type="button" onClick={this.updateLessonDetails}>
            Edit
          </button>
        </form>
      );
    }
    return jsx;
  }
}

LessonDetails.defaultProps = {
  start: undefined,
  end: undefined,
  rating: undefined,
  location: undefined,
  teacher: undefined,
};

LessonDetails.propTypes = {
  eventId: PropTypes.number.isRequired,
  start: PropTypes.string,
  end: PropTypes.string,
  rating: PropTypes.number,
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  teacher: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  isLessonUpdating: PropTypes.bool.isRequired,
  locations: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  updateEventRequest: PropTypes.func.isRequired,
  getAllLocationsRequest: PropTypes.func.isRequired,
  getAllPeopleRequest: PropTypes.func.isRequired,
  teachers: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  // ownProps isn't recursive - just props supplied from 'above'
  locations: selectLocationsForDropdown(state),
  teachers: selectTeachersForDropdown(state),
  isLessonUpdating: state.flags.events.updatingEvent,
});

const mapDispatchToProps = {
  updateEventRequest,
  getAllLocationsRequest,
  getAllPeopleRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LessonDetails);
