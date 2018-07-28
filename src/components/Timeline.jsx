import React from 'react';

import eventData from '../eventData';
import Event from './Event';
import { sortEventsReverseChronological } from '../services/datetime';

const Timeline = () => {
  const eventDataReverseChronological = sortEventsReverseChronological(eventData);
  return (
    <div>
      {eventDataReverseChronological.map(event => (
        <Event
          name={event.name}
          start={event.start}
          end={event.end}
          type={event.type}
          rating={event.rating}
          location={event.location}
          people={event.people}
          items={event.items}
        />
      ))}
    </div>
  );
};

export default Timeline;
