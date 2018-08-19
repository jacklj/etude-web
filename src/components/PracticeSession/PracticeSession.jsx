/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { eventFetchRequest } from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';
// import { renderDuration } from '../../services/datetime';

class PracticeSession extends Component {
  componentDidMount() {
    // getPracticeSession to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific lesson page, so all lessons aren't already in the
    // store)
    console.log(this.props.eventId)
    this.props.eventFetchRequest(this.props.eventId);
  }

  render() {
    let jsx;
    if (!this.props.practiceSession) {
      jsx = <div>Loading</div>;
    } else {
      const { start } = this.props.practiceSession;
      jsx = (
        <div>
          <h3>Practice session</h3>
          {start}
        </div>
      );
    }
    return jsx;
  }
}

PracticeSession.defaultProps = {
  practiceSession: undefined,
};

PracticeSession.propTypes = {
  eventId: PropTypes.number.isRequired,
  practiceSession: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  eventFetchRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps isn't recursive - just props supplied from 'above'
  eventId: Number(ownProps.match.params.id),
  practiceSession: selectEvent(state, ownProps),
});

const mapDispatchToProps = {
  eventFetchRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PracticeSession);
