/* eslint-disable camelcase */
import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import DateTime from 'react-datetime';
import Select from 'react-select';

import {
  createLesson, getLocations, getTeachers,
} from '../services/api';

const Label = styled.label`
  display: block;
`;

class AddLesson extends Component {
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
  }

  componentDidMount() {
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
      allLocations,
      allTeachers,
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

    createLesson(newLesson)
      .then(lesson => {
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
      });
  }

  render() {
    const {
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
          <input type="submit" value="Add lesson" />
        </form>
      </div>
    );
  }
}

export default AddLesson;
