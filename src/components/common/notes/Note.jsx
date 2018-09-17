import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card, Label } from '../styledComponents';

import { generalNoteUpdateRequest, noteDeleteRequest } from '../../../redux/notes/notes.actions';

const VIEW = {
  DISPLAY: 'VIEW.DISPLAY',
  EDIT: 'VIEW.EDIT',
  DELETE: 'VIEW.DELETE',
};

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: VIEW.DISPLAY,
      editingNote: '',
      editingScore: '',
    };

    this.showDeleteNote = this.showDeleteNote.bind(this);
    this.showEditNote = this.showEditNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNoteSubmit = this.editNoteSubmit.bind(this);
    this.cancelEditingOrDeletingNote = this.cancelEditingOrDeletingNote.bind(this);
  }

  showDeleteNote() {
    this.setState({
      currentView: VIEW.DELETE,
    });
  }

  deleteNote(event) {
    event.preventDefault();
    const { id: noteId, eventId } = this.props;
    this.props.noteDeleteRequest(noteId, eventId);
    // no need to change the view, as this component will disappear!
  }

  showEditNote() {
    const { note, score } = this.props;
    this.setState({
      currentView: VIEW.EDIT,
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

  editNoteSubmit(event) {
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
    this.setState({ currentView: VIEW.DISPLAY });
  }

  cancelEditingOrDeletingNote() {
    this.setState({ currentView: VIEW.DISPLAY });
  }

  render() {
    const { note, score, type } = this.props;
    const { currentView, editingNote, editingScore } = this.state;

    let jsx;
    switch (currentView) {
      case VIEW.DISPLAY:
        jsx = (
          <div>
            <div>{note}</div>
            <div>{score}</div>
            <div>{type}</div>
            <button type="button" onClick={this.showEditNote}>Edit</button>
            <button type="button" onClick={this.showDeleteNote}>Delete</button>
          </div>
        );
        break;
      case VIEW.EDIT:
        jsx = (
          <form onSubmit={this.editNoteSubmit}>
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
            <button type="button" onClick={this.cancelEditingOrDeletingNote}>Cancel</button>
          </form>
        );
        break;
      case VIEW.DELETE:
        jsx = (
          <div>
            <button type="button" onClick={this.cancelEditingOrDeletingNote}>Cancel</button>
            <button type="button" onClick={this.deleteNote}>Delete</button>
          </div>
        );
        break;
      default:
        break;
    }
    return (
      <Card>
        {jsx}
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
  noteDeleteRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  generalNoteUpdateRequest,
  noteDeleteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);