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

RecentPracticeSession.propTypes = {
  notes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  start: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default RecentPracticeSession;
