/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import DateTime from 'react-datetime';
import Select from 'react-select';

import Items from '../Items';
import AddGeneralNote from './AddGeneralNote';
import GeneralNotes from './GeneralNotes';
import { Label } from '../common/itemSections';
import { locationsFetchRequest } from '../../redux/locations/locations.actions';
import { peopleFetchRequest } from '../../redux/people/people.actions';
import { selectLocationsForDropdown } from '../../redux/locations/locations.selectors';
import { selectTeachersForDropdown } from '../../redux/people/people.selectors';
import { selectEvent } from '../../redux/events/events.selectors';
import {
  editLesson, getLesson,
} from '../../services/api';
import { renderDuration } from '../../services/datetime';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: undefined,
      selectedTeacher: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTeacherChange = this.handleTeacherChange.bind(this);
    this.transformServerDataIntoState = this.transformServerDataIntoState.bind(this);
  }

  componentDidMount() {
    const { eventId } = this.props;
    this.setState({ event_id: eventId });

    this.props.locationsFetchRequest();
    this.props.peopleFetchRequest();

    // getLesson to ensure it's up to date in the store
    this.transformServerDataIntoState(this.props.lesson);
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleLocationChange(selectedLocation) {
    this.setState({ selectedLocation });
  }

  handleTeacherChange(selectedTeacher) {
    this.setState({ selectedTeacher });
  }

  handleStartChange(newDateTime) {
    const start = moment(newDateTime).format();
    this.setState({
      start,
    });
  }

  handleEndChange(newDateTime) {
    const end = moment(newDateTime).format();
    this.setState({
      end,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      event_id,
      start,
      end,
      type,
      rating,
      selectedLocation,
      selectedTeacher,
    } = this.state;

    const newLesson = {
      start,
      end,
      type,
      rating: Number(rating),
      location_id: selectedLocation.value,
      teacher_id: selectedTeacher.value,
    };

    editLesson(newLesson, event_id) // PUT edited lesson
      .then(this.transformServerDataIntoState);
  }

  transformServerDataIntoState(lesson) {
    // repopulate state with lesson details returned from server, to ensure
    // they are synchronised
    this.setState({ ...lesson });
    // set selectedLocation from the returned lesson_id
    const newSelectedLocation = this.props.locations.filter(
      location => location.value === lesson.location.id,
    )[0];
    this.setState({ selectedLocation: newSelectedLocation });

    // set selectedTeacher from the returned teacher_id
    const newSelectedTeacher = this.props.teachers.filter(
      teacher => teacher.value === lesson.teacher.id,
    )[0];
    this.setState({ selectedTeacher: newSelectedTeacher });
  }

  render() {
    const {
      event_id,
      selectedTeacher,
      selectedLocation,
      start,
      teacher,
      end,
      type,
      rating,
      items,
      general_notes,
    } = this.state;

    // need to wrap start and end in moment(), or DateTime component doesn't work
    const startMoment = moment(start);
    const endMoment = moment(end);

    return (
      <div>
        <h3>Lesson{teacher && ` with ${teacher.first_name} ${teacher.surname}`}, {renderDuration(start, end)}</h3>
        <div>
          {JSON.stringify(this.state)}
        </div>
        <form onSubmit={this.handleSubmit}>
          <Label>
            start:
            <DateTime value={startMoment} onChange={this.handleStartChange} />
          </Label>
          <Label>
            end:
            <DateTime value={endMoment} onChange={this.handleEndChange} />
          </Label>
          <Label>
            type:
            <input type="text" name="type" value={type} onChange={this.handleChange} />
          </Label>
          <Label>
            rating:
            <StarRatingComponent
              name="rating"
              value={rating}
              starCount={5}
              onStarClick={this.onStarClick}
            />
          </Label>
          <Label>
            location:
            <Select
              name="location_id"
              value={selectedLocation}
              onChange={this.handleLocationChange}
              options={this.props.locations}
            />
          </Label>
          <Label>
            teacher:
            <Select
              name="teacher_id"
              value={selectedTeacher}
              onChange={this.handleTeacherChange}
              options={this.props.teachers}
            />
          </Label>
          <input type="submit" value="Save details" />
        </form>
        <h3>General lesson notes</h3>
        <AddGeneralNote eventId={event_id} />
        <GeneralNotes notes={general_notes} />
        <Items items={items} />
      </div>
    );
  }
}

Lesson.propTypes = {
  eventId: PropTypes.number.isRequired,
  lesson: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  locations: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  locationsFetchRequest: PropTypes.func.isRequired,
  peopleFetchRequest: PropTypes.func.isRequired,
  teachers: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps isn't recursive - just props supplied from 'above'
  eventId: ownProps.match.params.id,
  locations: selectLocationsForDropdown(state),
  teachers: selectTeachersForDropdown(state),
  lesson: selectEvent(state, ownProps),
});

const mapDispatchToProps = {
  locationsFetchRequest,
  peopleFetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
