/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import DateTime from 'react-datetime';
import Select from 'react-select';

import { Label } from '../common/styledComponents';
import { lessonUpdateRequest } from '../../redux/events/events.actions';
import { locationsFetchRequest } from '../../redux/locations/locations.actions';
import { peopleFetchRequest } from '../../redux/people/people.actions';
import { selectLocationsForDropdown } from '../../redux/locations/locations.selectors';
import { selectTeachersForDropdown } from '../../redux/people/people.selectors';
import { getSelectOption } from '../../services/utils';

class LessonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingStart: '',
      editingEnd: '',
      editingType: '',
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
    this.props.locationsFetchRequest();
    this.props.peopleFetchRequest();
  }

  updateLessonDetails() {
    // set the editing state to be equal to the lesson data in redux (via this.props)
    const editingLocation = getSelectOption(this.props.location, this.props.locations);
    const editingTeacher = getSelectOption(this.props.teacher, this.props.teachers);

    this.setState({
      isEditing: true,
      editingStart: this.props.start,
      editingEnd: this.props.end,
      editingType: this.props.type,
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
      type: this.state.editingType,
      rating: Number(this.state.editingRating),
      location_id: this.state.editingLocation.value,
      teacher_id: this.state.editingTeacher.value,
    };
    this.props.lessonUpdateRequest(newLesson, this.props.eventId);
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
        editingType, editingRating, editingLocation, editingTeacher,
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
          {this.props.isLessonUpdating ? <div>Updating...</div> : <input type="submit" value="Save details" />}
        </form>
      );
    } else {
      const start = moment(this.props.start); // need to wrap start and end in moment(), ...
      const end = moment(this.props.end); // or DateTime component doesn't work
      const { rating, type } = this.props;
      const teacher = getSelectOption(this.props.teacher, this.props.teachers);
      const location = getSelectOption(this.props.location, this.props.locations);

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

LessonDetails.propTypes = {
  eventId: PropTypes.number.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  teacher: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLessonUpdating: PropTypes.bool.isRequired,
  locations: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  lessonUpdateRequest: PropTypes.func.isRequired,
  locationsFetchRequest: PropTypes.func.isRequired,
  peopleFetchRequest: PropTypes.func.isRequired,
  teachers: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  // ownProps isn't recursive - just props supplied from 'above'
  locations: selectLocationsForDropdown(state),
  teachers: selectTeachersForDropdown(state),
  isLessonUpdating: state.events.updatingEvent,
});

const mapDispatchToProps = {
  lessonUpdateRequest,
  locationsFetchRequest,
  peopleFetchRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LessonDetails);
