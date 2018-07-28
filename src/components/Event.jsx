import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

import People from './People';
import Items from './Items';
import { renderDuration } from '../services/datetime';
import { renderEventType } from '../services/display';

const Card = styled.div`
  background-color: rgb(250, 250, 250);
  display: block;
  padding: 10px;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 0px 8px 10px 0px grey;
  width: 400px;
  min-height: 150px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  font-weight: 400;
`;

const Type = styled.div`
  color: rgb(90, 90, 90);
  font-size: 1.1em;
`;

const Duration = styled.div`
  color: rgb(90, 90, 90);
  font-size: 1.1em;
`;

const Location = styled.div`
  color: rgb(90, 90, 90);
  font-size: 1.1em;
`;

const Event = ({
  end, items, location, name, people, rating, start, type,
}) => {
  const duration = renderDuration(start, end);
  const eventType = renderEventType(type);

  return (
    <Card>
      <div>
        <Title>{name}</Title>
        <Type>{eventType}</Type>
        <Duration>{duration}</Duration>
        <Location>{location.name}</Location>
        <StarRatingComponent
          name="EventRating" /* name of the radio input, it is required */
          value={rating} /* number of selected icon (`0` - none, `1` - first) */
          starCount={5} /* number of icons in rating, default `5` */
          editing={false} /* is component available for editing, default `true` */
        />
      </div>
      <People people={people} />
      <Items items={items} />
    </Card>
  );
};

Event.defaultProps = {
  end: undefined,
  rating: undefined,
  location: undefined,
  people: undefined,
  items: undefined,
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number,
  // TODO 28/7/2018 improve proptype definitions
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  people: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  items: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default Event;
