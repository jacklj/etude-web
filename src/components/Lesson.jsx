/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import DateTime from 'react-datetime';
import Select from 'react-select';

import {
  editLesson, getLesson, getLocations, getTeachers,
} from '../services/api';

const Label = styled.label`
  display: block;
`;

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLocations: [],
      selectedLocation: undefined,
      allTeachers: [],
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
    const event_id = this.props.match.params.id;
    this.setState({ event_id });

    getLocations()
      .then(allLocations => allLocations.map(location => ({
        value: location.id,
        label: location.name,
      })))
      .then(allLocations => this.setState({ allLocations }));

    getTeachers()
      .then(allTeachers => allTeachers.map(teacher => ({
        value: teacher.id,
        label: `${teacher.first_name} ${teacher.surname}`,
      })))
      .then(allTeachers => this.setState({ allTeachers }));

    getLesson(event_id).then(this.transformServerDataIntoState);
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
    const {
      allLocations,
      allTeachers,
    } = this.state;

    // repopulate state with lesson details returned from server, to ensure
    // they are synchronised
    this.setState({ ...lesson });
    // set selectedLocation from the returned lesson_id
    const newSelectedLocation = allLocations.filter(
      location => location.value === lesson.location_id,
    )[0];
    this.setState({ selectedLocation: newSelectedLocation });

    // set selectedTeacher from the returned teacher_id
    const newSelectedTeacher = allTeachers.filter(
      teacher => teacher.value === lesson.teacher_id,
    )[0];
    this.setState({ selectedTeacher: newSelectedTeacher });
  }

  render() {
    const {
      event_id,
      lesson_id,
      allLocations,
      selectedTeacher,
      selectedLocation,
      allTeachers,
      start,
      end,
      type,
      rating,
    } = this.state;

    // need to wrap start and end in moment(), or DateTime component doesn't work
    const startMoment = moment(start);
    const endMoment = moment(end);

    return (
      <div>
        <h3>View lesson</h3>
        <div>
          {JSON.stringify({
            event_id,
            lesson_id,
            selectedTeacher,
            selectedLocation,
            start,
            end,
            type,
            rating,
          })
          }
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
              options={allLocations}
            />
          </Label>
          <Label>
            teacher:
            <Select
              name="teacher_id"
              value={selectedTeacher}
              onChange={this.handleTeacherChange}
              options={allTeachers}
            />
          </Label>
          <input type="submit" value="Save lesson" />
        </form>
      </div>
    );
  }
}

Lesson.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Lesson;
