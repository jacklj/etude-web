import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RecentPracticeSession from './RecentPracticeSession';
import { selectThreeRecentPracticeSessionsWithNotes } from '../../redux/events/events.selectors';

const RecentPracticeSessions = ({ recentPracticeSessions }) => (
  <div>
    <h4>Recent practice sessions:</h4>
    {recentPracticeSessions.length > 0 ? recentPracticeSessions.map(practiceSession => (
      <RecentPracticeSession
        start={practiceSession.start}
        location={practiceSession.location}
        notes={practiceSession.notes}
        key={`${practiceSession.start} - ${practiceSession.end}`}
      />
    )) : <div>No recent practice sessions</div>}
  </div>
);

RecentPracticeSessions.propTypes = {
  recentPracticeSessions: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  recentPracticeSessions: selectThreeRecentPracticeSessionsWithNotes(state),
});

export default connect(mapStateToProps)(RecentPracticeSessions);
