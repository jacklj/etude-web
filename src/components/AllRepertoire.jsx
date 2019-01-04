import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import { push } from 'connected-react-router';

import { selectAllRepertoireForTable } from '../redux/repertoire/repertoire.selectors';
import { getAllRepertoireRequest } from '../redux/repertoire/repertoire.actions';
import { getAllPeopleRequest } from '../redux/people/people.actions';

// order: id, name, character, larger work, composer, type, composition date, 
// date added, date last edited
const columns = [
  {
    name: 'ID',
    options: {
      filter: false,
      display: 'false',
    },
  },
  {
    name: <span>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>,
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

class AllRepertoire extends Component {
  options = {
    filterType: 'multiselect',
    print: false,
    download: false,
    viewColumns: false,
    selectableRows: false,
    responsive: 'scroll',
    onRowClick: (rowData) => {
      const repId = rowData[0];
      this.props.push(`/repertoire/${repId}`);
    },
  };

  componentDidMount() {
    this.props.getAllRepertoireRequest();
    this.props.getAllPeopleRequest();
  }

  render() {
    const { allRepertoire } = this.props;
    return (
      <div>
        <MUIDataTable
          title="Repertoire"
          data={allRepertoire}
          columns={columns}
          options={this.options}
        />
      </div>
    );
  }
}

AllRepertoire.propTypes = {
  allRepertoire: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  getAllRepertoireRequest: PropTypes.func.isRequired,
  getAllPeopleRequest: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allRepertoire: selectAllRepertoireForTable(state),
});

const mapDispatchToProps = {
  getAllRepertoireRequest,
  getAllPeopleRequest,
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRepertoire);
