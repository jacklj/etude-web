/* eslint-disable camelcase */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import DateTime from 'react-datetime';
import Select from 'react-select';

import { locationsFetchRequest } from '../../redux/locations/locations.actions';
import { peopleFetchRequest } from '../../redux/people/people.actions';
import { lessonCreateRequest } from '../../redux/events/events.actions';
import { selectLocationsForDropdown } from '../../redux/locations/locations.selectors';
import { selectTeachersForDropdown } from '../../redux/people/people.selectors';


const Label = styled.label`
  display: block;
`;

const initialState = {
  start: '',
  end: '',
  type: '',
  rating: null,
  location: null,
  teacher: null,
};

class AddLesson extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.handleHTMLElementChange = this.handleHTMLElementChange.bind(this);
    this.handleCustomComponentChange = this.handleCustomComponentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.locationsFetchRequest();
    this.props.peopleFetchRequest();
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

    const {
      start,
      end,
      type,
      rating,
      location,
      teacher,
    } = this.state;

    const newLesson = {
      start,
      end,
      type,
      rating: Number(rating),
      location_id: location.value,
      teacher_id: teacher.value,
    };

    this.props.lessonCreateRequest(newLesson);
    this.setState({ ...initialState });
  }

  render() {
    const start = moment(this.state.start);
    const end = moment(this.state.end);
    const {
      type, rating, location, teacher,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Label>
            start:
            <DateTime
              value={start}
              onChange={this.handleCustomComponentChange('start')}
            />
          </Label>
          <Label>
            end:
            <DateTime
              value={end}
              onChange={this.handleCustomComponentChange('end')}
            />
          </Label>
          <Label>
            type:
            <input
              type="text"
              name="type"
              value={type}
              onChange={this.handleHTMLElementChange}
            />
          </Label>
          <Label>
            rating:
            <StarRatingComponent
              name="rating"
              value={rating}
              starCount={5}
              onStarClick={this.handleCustomComponentChange('rating')}
            />
          </Label>
          <Label>
            location:
            <Select
              value={location}
              onChange={this.handleCustomComponentChange('location')}
              options={this.props.locations}
            />
          </Label>
          <Label>
            teacher:
            <Select
              value={teacher}
              onChange={this.handleCustomComponentChange('teacher')}
              options={this.props.teachers}
            />
          </Label>
          {this.props.isLessonBeingCreated ? <div>Creating..</div> : <input type="submit" value="Add lesson" />}
        </form>
      </div>
    );
  }
}

AddLesson.propTypes = {
  locations: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  locationsFetchRequest: PropTypes.func.isRequired,
  peopleFetchRequest: PropTypes.func.isRequired,
  lessonCreateRequest: PropTypes.func.isRequired,
  teachers: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  isLessonBeingCreated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  // ownProps isn't recursive - just props supplied from 'above'
  locations: selectLocationsForDropdown(state),
  teachers: selectTeachersForDropdown(state),
  isLessonBeingCreated: state.events.creatingLesson,
});

const mapDispatchToProps = {
  locationsFetchRequest,
  peopleFetchRequest,
  lessonCreateRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddLesson);
