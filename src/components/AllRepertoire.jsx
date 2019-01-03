import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { selectAllRepertoireForTable } from '../redux/repertoire/repertoire.selectors';
import { getAllRepertoireRequest } from '../redux/repertoire/repertoire.actions';
import { getAllPeopleRequest } from '../redux/people/people.actions';


const getMuiTheme = () => createMuiTheme({
  overrides: {
    MUIDataTableHeadCell: {
      root: {
        '&:nth-child(2)': {
          width: 400
        },
      },
    },
    MUIDataTableBodyCell: {
      root: {
        backgroundColor: "red",
        width: "50px"
      },
    },
  },
});

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
    name: <span>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>,
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
    this.props.getAllPeopleRequest();
  }

  render() {
    const { allRepertoire } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title="Repertoire"
            data={allRepertoire}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

AllRepertoire.propTypes = {
  allRepertoire: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  getAllRepertoireRequest: PropTypes.func.isRequired,
  getAllPeopleRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allRepertoire: selectAllRepertoireForTable(state),
});

const mapDispatchToProps = {
  getAllRepertoireRequest,
  getAllPeopleRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRepertoire);
