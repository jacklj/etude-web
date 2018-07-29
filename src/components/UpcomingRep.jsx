import React, { Component } from 'react';

import { getUpcomingRepertoire } from '../services/api';
import Piece from './Piece';

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
          <Piece
            key={`${piece.name}, ${piece.deadline}`}
            name={piece.name}
            composerFirstName={piece.composer.first_name}
            composerSurname={piece.composer.surname}
            largerWork={piece.larger_work}
          />
        ))}
      </div>
    );
  }
}

export default UpcomingRep;
