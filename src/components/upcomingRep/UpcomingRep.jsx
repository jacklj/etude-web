import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getUpcomingRepertoireRequest } from '../../redux/repertoire/repertoire.actions';
import UpcomingPiece from './UpcomingPiece';
import { selectAllRepToWorkOn } from '../../redux/repertoire/repertoire.selectors';

class UpcomingRep extends Component {
  componentDidMount() {
    this.props.getUpcomingRepertoireRequest();
  }

  render() {
    const { upcomingRep } = this.props;
    return (
      <div>
        {upcomingRep
          ? Object.values(upcomingRep)
            .sort((a, b) => { // comparison function
              if (moment(a.deadline).isBefore(b.deadline)) {
                return -1;
              }
              return 1;
            })
            .map(upcomingRepItem => (
              <UpcomingPiece
                key={`${upcomingRepItem.repertoire_id}`}
                repertoireId={upcomingRepItem.repertoire_id}
                deadline={upcomingRepItem.deadline}
              />
            ))
          : <div>No upcoming rep :)</div>}
      </div>
    );
  }
}
UpcomingRep.defaultProps = {
  upcomingRep: undefined,
};

UpcomingRep.propTypes = {
  getUpcomingRepertoireRequest: PropTypes.func.isRequired,
  upcomingRep: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  upcomingRep: selectAllRepToWorkOn(state),
});

const mapDispatchToProps = {
  getUpcomingRepertoireRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingRep);
