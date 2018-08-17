import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vextab from 'vextab/releases/vextab-div'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

import { ITEM_TYPES } from '../../../constants';
import { Card } from '../../common/itemCards';
import Exercise from './Exercise';
import Piece from './Piece';
import { deleteItemRequest } from '../../../redux/items/items.actions';

class Item extends Component {
  constructor(props) {
    super(props);

    this.removeItemFromEvent = this.removeItemFromEvent.bind(this);
  }

  removeItemFromEvent() {
    const itemId = this.props.item.item_id;
    const { eventId } = this.props;
    console.log(this.props.item, itemId, eventId)
    this.props.deleteItemRequest(itemId, eventId);
  }

  render() {
    const { item } = this.props;
    let jsx;
    switch (item.type) {
      case ITEM_TYPES.EXERCISE: {
        const exercise = item;
        jsx = (
          <Exercise
            key={exercise.item_id}
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
            key={piece.item_id}
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
    return (
      <Card>
        {jsx}
        <button type="button" onClick={this.removeItemFromEvent}>Remove</button>
      </Card>
    );
  }
}

Item.propTypes = {
  eventId: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  deleteItemRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  deleteItemRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
