import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Items = ({ eventId, items }) => (
  <div>
    {items
      && Object.values(items)
        .map(item => <Item item={item} key={item.item_id} eventId={eventId} />)}
  </div>
);

Items.defaultProps = {
  items: undefined,
};

Items.propTypes = {
  items: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  eventId: PropTypes.number.isRequired,
};

export default Items;