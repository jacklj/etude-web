/* eslint-disable camelcase */
import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import DateTime from 'react-datetime';
import Select from 'react-select';

import { createLesson, editLesson, getLocations } from '../services/api';

const Label = styled.label`
  display: block;
`;

class AddLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLocations: [],
      selectedLocation: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    createLesson().then(lesson => this.setState({ ...lesson }));

    getLocations()
      .then(allLocations => allLocations.map(location => ({
        value: location.id,
        label: location.name,
      })))
      .then(allLocations => this.setState({ allLocations }));
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

  handleLocationChange(newLocation) {
    this.setState({ selectedLocation: newLocation });
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
      event_id,
      start,
      end,
      type,
      rating,
      selectedLocation,
      teacher_id,
    } = this.state;

    const newLesson = {
      start,
      end,
      type,
      rating: Number(rating),
      location_id: selectedLocation.value,
      teacher_id: Number(teacher_id),
    };

    editLesson(newLesson, event_id).then(lesson => {
      this.setState({ ...lesson });
      // set selectedLocation from the returned lesson_id
      const newSelectedLocation = allLocations.filter(
        location => location.value === lesson.lesson_id,
      )[0];
      this.setState({ selectedLocation: newSelectedLocation });
    });
  }

  render() {
    const {
      allLocations, selectedLocation, start, end, type, rating, teacher_id,
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
            <input
              type="number"
              name="teacher_id"
              value={teacher_id}
              onChange={this.handleChange}
            />
          </Label>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default AddLesson;
