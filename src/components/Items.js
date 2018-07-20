import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ITEM_TYPES } from '../constants';
import Exercise from './Exercise';
import Piece from './Piece';
import { Title } from './common/itemSections';

class Items extends Component {
  render() {
    return (
      <div>
        <Title>Items</Title>
        {this.props.items.map(item => {
          if (!item) return undefined;
          let jsx;
          switch (item.type) {
            case ITEM_TYPES.EXERCISE: {
              const exercise = item;
              jsx = (
                <Exercise
                  key={exercise.name}
                  name={exercise.name}
                  details={exercise.details}
                  teacherWhoCreatedItFirstName={
                    exercise.teacher_who_created_it.first_name
                  }
                  teacherWhoCreatedItSurname={
                    exercise.teacher_who_created_it.surname
                  }
                />
              );
              break;
            }
            case ITEM_TYPES.PIECE: {
              const piece = item;
              console.log(piece)
              jsx = (
                <Piece
                  key={piece.name}
                  name={piece.name}
                  composerFirstName={piece.composer.first_name}
                  composerSurname={piece.composer.surname}
                  compositionDate={piece.composition_date}
                  largerWork={piece.larger_work}
                  characterThatSingsIt={piece.character_that_sings_it}
                />
              );
              break;
            }
            default: {
              jsx = undefined;
            }
          }
          return jsx;
        })}
      </div>
    );
  }
}

Items.defaultProps = {
  items: undefined,
};

Items.propTypes = {
  items: PropTypes.array,
};

export default Items;
