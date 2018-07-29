import React, { Component } from 'react';

import { getUpcomingRepertoire } from '../../services/api';
import UpcomingPiece from './UpcomingPiece';

class UpcomingRep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingRep: [],
    };
  }

  componentDidMount() {
    getUpcomingRepertoire().then(upcomingRep => this.setState({ upcomingRep }));
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

export default UpcomingRep;
