import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingRepertoireRequest } from '../../redux/repertoire/repertoire.actions';
import UpcomingPiece from './UpcomingPiece';

class UpcomingRep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingRep: [],
    };
  }

  componentDidMount() {
    this.props.getUpcomingRepertoireRequest();
  }

  render() {
    const { upcomingRep } = this.state;
    return (
      <div>
        {upcomingRep.map(piece => (
          <UpcomingPiece
            key={`${piece.name}, ${piece.deadline}`}
            name={piece.name}
            composerFirstName={piece.composer.first_name}
            composerSurname={piece.composer.surname}
            largerWork={piece.larger_work}
            deadline={piece.deadline}
          />
        ))}
      </div>
    );
  }
}

UpcomingRep.propTypes = {
  getUpcomingRepertoireRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getUpcomingRepertoireRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingRep);
