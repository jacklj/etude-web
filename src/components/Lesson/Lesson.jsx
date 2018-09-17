/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LessonDetails from './LessonDetails';
import AddGeneralNote from '../common/notes/AddGeneralNote';
import GeneralNotes from '../common/notes/GeneralNotes';
import AddItem from '../common/items/AddItem';
import Items from '../common/items/Items';
import { eventFetchRequest, deleteEventRequest } from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';
import { renderDuration } from '../../services/datetime';

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.deleteLesson = this.deleteLesson.bind(this);
  }

  componentDidMount() {
    // getLesson to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific lesson page, so all lessons aren't already in the
    // store)
    this.props.eventFetchRequest(this.props.eventId);
  }

  deleteLesson() {
    if (window.confirm('Delete this lesson? (you will be sent back to the Timeline)')) {
      const { eventId } = this.props;
      this.props.deleteEventRequest(eventId);
    }
  }

  render() {
    const { eventId } = this.props;
    let jsx;
    if (!this.props.lesson) {
      jsx = <div>Loading</div>;
    } else {
      const {
        start, end, type, rating, location, teacher, notes, items,
      } = this.props.lesson;
      const title = `Lesson${teacher ? ` with ${teacher.first_name} ${teacher.surname}` : ''}${start ? `, ${renderDuration(start, end)}` : ''}`;
      jsx = (
        <div>
          <h3>{title}</h3>
          <LessonDetails
            eventId={eventId}
            start={start}
            end={end}
            type={type}
            rating={rating}
            location={location}
            teacher={teacher}
          />
          <div>
            <button type="button" onClick={this.deleteLesson}>
              Delete lesson
            </button>
          </div>
          <h3>Notes</h3>
          <AddGeneralNote eventId={eventId} />
          <GeneralNotes notes={notes} />
          <h3>Items</h3>
          <AddItem eventId={eventId} />
          <Items items={items} eventId={eventId} />
        </div>
      );
    }
    return jsx;
  }
}

Lesson.defaultProps = {
  lesson: undefined,
};

Lesson.propTypes = {
  eventId: PropTypes.number.isRequired,
  lesson: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  eventFetchRequest: PropTypes.func.isRequired,
  deleteEventRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps isn't recursive - just props supplied from 'above'
  eventId: Number(ownProps.match.params.id),
  lesson: selectEvent(state, ownProps),
});

const mapDispatchToProps = {
  eventFetchRequest,
  deleteEventRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lesson);
