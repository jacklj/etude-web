import React, { Component } from 'react';

import { createLesson } from '../services/api';

class AddLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    createLesson().then(lesson => this.setState({ ...lesson }));
  }

  handleChange(event) {
    const { name, target } = event;
    const { value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(`Form submitted: ${this.state}`);
    event.preventDefault();
  }

  render() {
    const {
      start, end, type, rating, location, teacher,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            start:
            <input type="text" value={start} onChange={this.handleChange} />
          </label>
          <label>
            end:
            <input type="text" value={end} onChange={this.handleChange} />
          </label>
          <label>
            type:
            <input type="text" value={type} onChange={this.handleChange} />
          </label>
          <label>
            rating:
            <input type="text" value={rating} onChange={this.handleChange} />
          </label>
          <label>
            location:
            <input type="text" value={location} onChange={this.handleChange} />
          </label>
          <label>
            teacher:
            <input type="text" value={teacher} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default AddLesson;
