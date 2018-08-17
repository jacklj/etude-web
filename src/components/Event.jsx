import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

import People from './People';
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

const TitleLink = styled(Link)`
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
  id, end, location, people, rating, start, type,
}) => {
  const duration = renderDuration(start, end);
  const eventType = renderEventType(type);

  return (
    <Card>
      <div>
        <TitleLink to={`/lesson/${id}`}>{eventType}</TitleLink>
        <Duration>{duration}</Duration>
        {location && <Location>{location.name}</Location>}
        <StarRatingComponent
          name="EventRating" /* name of the radio input, it is required */
          value={rating} /* number of selected icon (`0` - none, `1` - first) */
          starCount={5} /* number of icons in rating, default `5` */
          editing={false} /* is component available for editing, default `true` */
        />
      </div>
      <People people={people} />
    </Card>
  );
};

Event.defaultProps = {
  end: undefined,
  rating: undefined,
  location: undefined,
  people: undefined,
};

Event.propTypes = {
  id: PropTypes.number.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number,
  // TODO 28/7/2018 improve proptype definitions
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  people: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default Event;
