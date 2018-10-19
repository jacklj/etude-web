/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PerformanceDetails from './PerformanceDetails';
import AddNoteToEvent from '../common/notes/AddNoteToEvent';
import GeneralNotes from '../common/notes/GeneralNotes';
import AddRepOrExerciseInstance from '../common/repOrExerciseInstances/AddRepOrExerciseInstance';
import RepOrExerciseInstances from '../common/repOrExerciseInstances/RepOrExerciseInstances';
import { getEventRequest, deleteEventRequest } from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';
import { renderDuration } from '../../services/datetime';

class Performance extends Component {
  constructor(props) {
    super(props);
    this.deletePerformance = this.deletePerformance.bind(this);
  }

  componentDidMount() {
    // getPerformance to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific performance page, so all performances aren't already in the
    // store)
    this.props.getEventRequest(this.props.eventId);
  }

  deletePerformance() {
    if (window.confirm('Delete this performance? (you will be sent back to the Timeline)')) {
      const { eventId } = this.props;
      this.props.deleteEventRequest(eventId);
    }
  }

  render() {
    const { eventId } = this.props;
    let jsx;
    if (!this.props.performance) {
      jsx = <div>Loading</div>;
    } else {
      const {
        start,
        end,
        type,
        performance_type: performanceType,
        rating,
        location,
        name,
        details,
        notes,
        repOrExerciseInstances,
      } = this.props.performance;
      const title = `Performance: ${name || ''}${
        start ? `, ${renderDuration(start, end)}` : ''
      }`;
      jsx = (
        <div>
          <h3>{title}</h3>
          <PerformanceDetails
            eventId={eventId}
            start={start}
            end={end}
            type={type}
            performanceType={performanceType}
            name={name}
            rating={rating}
            location={location}
            details={details}
          />
          <div>
            <button type="button" onClick={this.deletePerformance}>
              Delete performance
            </button>
          </div>
          <h3>Repertoire</h3>
          <AddRepOrExerciseInstance eventId={eventId} />
          <RepOrExerciseInstances
            repOrExerciseInstances={repOrExerciseInstances}
            eventId={eventId}
          />
          <h3>Notes</h3>
          <AddNoteToEvent eventId={eventId} />
          <GeneralNotes notes={notes} />
        </div>
      );
    }
    return jsx;
  }
}

Performance.defaultProps = {
  performance: undefined,
};

Performance.propTypes = {
  eventId: PropTypes.number.isRequired,
  performance: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  getEventRequest: PropTypes.func.isRequired,
  deleteEventRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps isn't recursive - just props supplied from 'above'
  eventId: Number(ownProps.match.params.id),
  performance: selectEvent(state, ownProps),
});

const mapDispatchToProps = {
  getEventRequest,
  deleteEventRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Performance);
