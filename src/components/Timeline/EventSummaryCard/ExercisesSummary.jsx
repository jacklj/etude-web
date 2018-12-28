import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { renderItemWithNamePropertyList } from '../../../services/display';

const ExercisesSummary = ({ exercises }) => {
  if (!exercises || exercises.length === 0) {
    return null;
  }
  const summaryList = renderItemWithNamePropertyList(exercises);
  return <Typography>{`Exercises: ${summaryList}`}</Typography>;
};

export default ExercisesSummary;
