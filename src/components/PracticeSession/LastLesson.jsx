import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GeneralNotes from '../common/notes/GeneralNotes';
import { selectLastLesson } from '../../redux/events/events.selectors';

function LastLesson({ lesson }) {
  if (!lesson) return null;
  const { notes, start, teacher } = lesson;
  const title = `Last lesson${teacher ? `: ${teacher.first_name} ${teacher.surname}` : ''}`;
  return (
    <div>
      <h4>{title}</h4>
      <h5>{start}</h5>
      <GeneralNotes notes={notes} editable={false} />
    </div>
  );
}

LastLesson.defaultProps = {
  lesson: undefined,
};

LastLesson.propTypes = {
  lesson: PropTypes.object,
};

const mapStateToProps = state => ({
  lesson: selectLastLesson(state),
});

export default connect(mapStateToProps)(LastLesson);
