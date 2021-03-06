import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { renderItemWithNamePropertyList } from '../../../services/display';

const RepertoireSummary = ({ repertoire }) => {
  if (!repertoire || repertoire.length === 0) {
    return null;
  }
  const summaryList = renderItemWithNamePropertyList(repertoire);
  return <Typography>{`Repertoire: ${summaryList}`}</Typography>;
};

RepertoireSummary.propTypes = {
  repertoire: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default RepertoireSummary;
