import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

import { selectAllRepertoireForTable } from '../redux/repertoire/repertoire.selectors';
import { getAllRepertoireRequest } from '../redux/repertoire/repertoire.actions';

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
