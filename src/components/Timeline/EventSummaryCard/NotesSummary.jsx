import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const getFirstXwordsOfString = (string, x) => {
  const words = string.split(' ');
  const numberOfWordsInNote = words.length;
  const limit = numberOfWordsInNote > x ? x : numberOfWordsInNote;
  let result = '';
  for (let i = 0; i < limit; i += 1) {
    result += `${words[i]} `;
  }
  result.slice(0, -1);
  return result;
};

const renderNotesSummaryList = notes => {
  const initialValue = '';
  let result = notes.reduce((accumulator, note) => {
    const { note: noteText } = note;
    const firstTenWordsOfNote = `${getFirstXwordsOfString(noteText, 10)}...`;
    return `${accumulator}${firstTenWordsOfNote}, `;
  }, initialValue);
  result = result.slice(0, -2);
  return result;
};

const NotesSummary = ({ notes }) => {
  if (!notes || notes.length === 0) {
    return null;
  }
  const summaryList = renderNotesSummaryList(notes);
  return <Typography>{`Notes: ${summaryList}`}</Typography>;
};

NotesSummary.propTypes = {
  notes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default NotesSummary;
