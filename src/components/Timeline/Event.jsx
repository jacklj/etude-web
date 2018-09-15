import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

import { EVENT_TYPES } from '../../constants';
import { Title } from '../common/styledComponents';
import { renderDuration } from '../../services/datetime';

const Card = styled.div`
  background-color: rgb(250, 250, 250);
  display: block;
  padding: 10px;
  margin: 20px;
  border-radius: 3px;
  box-shadow: 0px 2px 5px 0px grey;
  width: 400px;
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

const renderName = person => `${person.first_name} ${person.surname}`;

const Event = ({ event }) => {
  const {
    event_id: eventId, end, location, rating, start, type,
  } = event;
  const duration = start ? renderDuration(start, end) : undefined;
  let jsx;

  switch (type) {
    case EVENT_TYPES.LESSON: {
      jsx = (
        <TitleLink to={`/lesson/${eventId}`}>
          {`Lesson${event.teacher ? ` with ${renderName(event.teacher)}` : ''}`}
        </TitleLink>
      );
      break;
    }
    case EVENT_TYPES.MASTERCLASS: {
      jsx = <Title>{`Masterclass with ${renderName(event.teacher)}`}</Title>;
      break;
    }
    case EVENT_TYPES.PRACTICE: {
      jsx = (
        <TitleLink to={`/practice_session/${eventId}`}>
          {`Practice${event.location ? ` at ${event.location.name}` : ''}`}
        </TitleLink>
      );
      break;
    }
    case EVENT_TYPES.CONCERT: {
      jsx = <Title>{`Concert: ${event.name}`}</Title>;
      break;
    }
    case EVENT_TYPES.OPERA: {
      jsx = <Title>{`Opera: ${event.name}`}</Title>;
      break;
    }
    case EVENT_TYPES.RECITAL: {
      jsx = <Title>{`Recital: ${event.name}`}</Title>;
      break;
    }
    case EVENT_TYPES.OTHER: {
      jsx = <Title>{`Other: ${event.name}`}</Title>;
      break;
    }
    default:
      break;
  }

  return (
    <Card>
      <div>
        {jsx}
        {duration && <Duration>{duration}</Duration>}
        {location && <Location>{location.name}</Location>}
        <div>
          <StarRatingComponent
            name="EventRating" /* name of the radio input, it is required */
            value={rating} /* number of selected icon (`0` - none, `1` - first) */
            starCount={5} /* number of icons in rating, default `5` */
            editing={false} /* is component available for editing, default `true` */
          />
        </div>
      </div>
    </Card>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Event;
