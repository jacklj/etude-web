import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { generalNoteCreateRequest } from '../../redux/notes/notes.actions';

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
    const newNote = {
      note,
      score,
      type,
      event_id: eventId,
    };
    this.props.generalNoteCreateRequest(newNote, eventId);
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

AddGeneralNote.defaultProps = {
  eventId: undefined,
};

AddGeneralNote.propTypes = {
  eventId: PropTypes.number,
  generalNoteCreateRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  generalNoteCreateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGeneralNote);
