import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RecentPracticeSession from './RecentPracticeSession';
import { selectFiveRecentPracticeSessionsWithNotes } from '../../redux/events/events.selectors';

function RecentPracticeSessions({ recentPracticeSessions }) {
  return (
    <div>
      {recentPracticeSessions.map(practiceSession => (
        <RecentPracticeSession
          start={practiceSession.start}
          location={practiceSession.location}
          notes={practiceSession.notes}
        />
      ))}
    </div>
  );
}

RecentPracticeSessions.propTypes = {
  recentPracticeSessions: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  recentPracticeSessions: selectFiveRecentPracticeSessionsWithNotes(state),
});

export default connect(mapStateToProps)(RecentPracticeSessions);
