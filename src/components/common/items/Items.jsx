import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import { ItemsOrNotesContainer } from '../styledComponents';

const Items = ({ eventId, items }) => (
  <ItemsOrNotesContainer>
    {items
      && Object.values(items)
        .map(item => <Item item={item} key={item.item_id} eventId={eventId} />)}
  </ItemsOrNotesContainer>
);

Items.defaultProps = {
  items: undefined,
};

Items.propTypes = {
  items: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  eventId: PropTypes.number.isRequired,
};

export default Items;
