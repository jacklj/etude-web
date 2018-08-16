import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card } from '../common/itemCards';
import { Label } from '../common/itemSections';

import { generalNoteUpdateRequest } from '../../redux/notes/notes.actions';

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editingNote: '',
      editingScore: '',
    };

    this.editNote = this.editNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelEditingNote = this.cancelEditingNote.bind(this);
  }

  editNote() {
    const { note, score } = this.props;
    this.setState({
      editing: true,
      editingNote: note,
      editingScore: score,
    });
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
      editingNote,
      editingScore,
    } = this.state;
    const { id } = this.props;

    const updatedNote = {
      note: editingNote,
      score: editingScore,
      type: this.props.type,
      id: this.props.id,
      event_id: this.props.eventId,
    };

    this.props.generalNoteUpdateRequest(updatedNote, id);
    this.setState({ editing: false });
  }

  cancelEditingNote() {
    this.setState({ editing: false });
  }

  render() {
    const { note, score, type } = this.props;
    const { editing, editingNote, editingScore } = this.state;
    return (
      <Card>
        {editing ? (
          <form onSubmit={this.handleSubmit}>
            <div>editing</div>
            <Label>
              note:
              <textarea name="editingNote" value={editingNote} onChange={this.handleChange} />
            </Label>
            <Label>
              score:
              <textarea name="editingScore" value={editingScore} onChange={this.handleChange} />
            </Label>
            <input type="submit" value="Save" />
            <button type="button" onClick={this.cancelEditingNote}>Cancel</button>
          </form>
        ) : (
          <div>
            <div>{note}</div>
            <div>{score}</div>
            <div>{type}</div>
            <button type="button" onClick={this.editNote}>Edit</button>
          </div>
        )
        }
      </Card>
    );
  }
}

Note.defaultProps = {
  score: '',
};

Note.propTypes = {
  note: PropTypes.string.isRequired,
  score: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  eventId: PropTypes.number.isRequired,
  generalNoteUpdateRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  generalNoteUpdateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
