import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

import { selectAllRepertoireForTable } from '../redux/repertoire/repertoire.selectors';

const columns = [
  'ID',
  'Name',
  'Composition date',
  'Larger work',
  'Character',
  'Type',
  'Date added',
  'Date last edited',
  'Composer',
];

const options = {
  filterType: 'checkbox',
};

const AllRepertoire = ({ allRepertoire }) => (
  <div>
    <MUIDataTable
      title="Repertoire"
      data={allRepertoire}
      columns={columns}
      options={options}
    />
  </div>
);

AllRepertoire.propTypes = {
  allRepertoire: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  allRepertoire: selectAllRepertoireForTable(state),
});

export default connect(mapStateToProps)(AllRepertoire);
