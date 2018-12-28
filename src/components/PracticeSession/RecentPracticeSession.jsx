import React from 'react';
import PropTypes from 'prop-types';

import GeneralNotes from '../common/notes/GeneralNotes';

const RecentPracticeSession = ({ notes, start, location }) => {
  const title = `Practice session at ${start}, ${location}`;
  return (
    <div>
      <h4>{title}</h4>
      <GeneralNotes notes={notes} editable={false} />
    </div>
  );
};

RecentPracticeSession.defaultProps = {
  notes: undefined,
  start: undefined,
  location: undefined,
};

RecentPracticeSession.propTypes = {
  notes: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  start: PropTypes.string,
  location: PropTypes.string,
};

export default RecentPracticeSession;
