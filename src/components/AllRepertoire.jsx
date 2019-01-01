import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

import { selectAllRepertoireForTable } from '../redux/repertoire/repertoire.selectors';
import { getAllRepertoireRequest } from '../redux/repertoire/repertoire.actions';

// order: id, name, character, larger work, composer, type, composition date, date added, date last edited
const columns = [
  {
    name: 'ID',
    options: {
      filter: false,
      display: 'false',
    },
  },
  {
    name: 'Name',
    options: {
      filter: false,
    },
  },
  'Character',
  'Larger work',
  'Composer',
  'Type',
  'Composition date',
  'Date added',
  'Date last edited',
];

const options = {
  filterType: 'multiselect',
  print: false,
  download: false,
  viewColumns: false,
  selectableRows: false,
  responsive: 'scroll',
};

class AllRepertoire extends Component {
  componentDidMount() {
    this.props.getAllRepertoireRequest();
  }

  render() {
    const { allRepertoire } = this.props;
    return (
      <div>
        <MUIDataTable
          title="Repertoire"
          data={allRepertoire}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

AllRepertoire.propTypes = {
  allRepertoire: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  getAllRepertoireRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allRepertoire: selectAllRepertoireForTable(state),
});

const mapDispatchToProps = {
  getAllRepertoireRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRepertoire);
