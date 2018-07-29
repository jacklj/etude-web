import React from 'react';
import PropTypes from 'prop-types';

import { ITEM_TYPES } from '../constants';
import Exercise from './Exercise';
import Piece from './Piece';
import { Title } from './common/itemSections';

const Items = ({ items }) => (
  <div>
    <Title>Items</Title>
    {items.map(item => {
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
              score={exercise.score}
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

Items.defaultProps = {
  items: [],
};

Items.propTypes = {
  // TODO 28/7/2018 improve proptype definitions
  items: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default Items;
