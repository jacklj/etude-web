import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingRepertoireRequest } from '../../redux/repertoire/repertoire.actions';
import UpcomingPiece from './UpcomingPiece';
import { selectAllRepToWorkOn } from '../../redux/reduxOrm/selectors/repertoire.selectors';

class UpcomingRep extends Component {
  componentDidMount() {
    this.props.getUpcomingRepertoireRequest();
  }

  render() {
    const { upcomingRep } = this.props;
    console.log(upcomingRep)
    return (
      <div>
        {upcomingRep && Object.values(upcomingRep).map(piece => (
          <UpcomingPiece
            key={`${piece.name}, ${piece.deadline}`}
            name={piece.name}
            // composerFirstName={piece.composer.first_name}
            // composerSurname={piece.composer.surname}
            largerWork={piece.larger_work}
            deadline={piece.deadline}
          />
        ))}
      </div>
    );
  }
}
UpcomingRep.defaultProps = {
  upcomingRep: undefined,
};

UpcomingRep.propTypes = {
  getUpcomingRepertoireRequest: PropTypes.func.isRequired,
  upcomingRep: PropTypes.array,
};

const mapStateToProps = state => ({
  upcomingRep: selectAllRepToWorkOn(state),
});

const mapDispatchToProps = {
  getUpcomingRepertoireRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingRep);
