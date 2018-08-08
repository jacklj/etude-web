import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createNote } from '../../services/api';

class AddGeneralNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      score: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { note, score } = this.state;
    const { eventId } = this.props;
    const type = 'NOTE_TYPES.TECHNICAL'; // TODO 8/8/2018 all general notes technical atm
    createNote({
      note, score, type, event_id: eventId,
    }).then(res => alert(`Note submitted! ${res}`));
    console.log(event);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { note, score } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name="note" value={note} onChange={this.handleChange} />
        <textarea name="score" value={score} onChange={this.handleChange} />
        <input type="submit" value="Add note" />
      </form>
    );
  }
}

AddGeneralNote.propTypes = {
  eventId: undefined,
};

AddGeneralNote.propTypes = {
  eventId: PropTypes.number,
};

export default AddGeneralNote;
