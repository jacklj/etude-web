/* eslint-disable camelcase */
import React, { Component } from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

import { createLesson, editLesson } from '../services/api';

const Label = styled.label`
  display: block;
`;

class AddLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }

  componentDidMount() {
    createLesson().then(lesson => this.setState({ ...lesson }));
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

  handleSubmit(event) {
    event.preventDefault();
    const {
      event_id, start, end, type, rating, location_id, teacher_id,
    } = this.state;

    const newLesson = {
      start,
      end,
      type,
      rating: Number(rating),
      location_id: Number(location_id),
      teacher_id: Number(teacher_id),
    };
    editLesson(newLesson, event_id).then(lesson => this.setState({ ...lesson }));
  }

  render() {
    const {
      start, end, type, rating, location_id, teacher_id,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Label>
            start:
            <input type="text" name="start" value={start} onChange={this.handleChange} />
          </Label>
          <Label>
            end:
            <input type="text" name="end" value={end} onChange={this.handleChange} />
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
            <input
              type="text"
              name="location_id"
              value={location_id}
              onChange={this.handleChange}
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
