import React, { Component } from 'react';
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
  color: rgb(90,90,90);
  font-size: 1.1em;
`
const Duration = styled.div`
  color: rgb(90,90,90);
  font-size: 1.1em;
`;

class Event extends Component {
  render() {
    const duration = renderDuration(this.props.start, this.props.end);
    const eventType = renderEventType(this.props.type);

    return (
        <Card>
          <div>
            <Title>{this.props.name}</Title>
            <Type>{eventType}</Type>
            <Duration>{duration}</Duration>
            <StarRatingComponent
              name={'EventRating'} /* name of the radio input, it is required */
              value={this.props.rating} /* number of selected icon (`0` - none, `1` - first) */
              starCount={5} /* number of icons in rating, default `5` */
              editing={false} /* is component available for editing, default `true` */
            />
          </div>
          <People people={this.props.people} />
          <Items items={this.props.items} />
        </Card>
    );
  }
}

Event.defaultProps = {
  end: undefined,
  rating: undefined,
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number,
  location: PropTypes.object,
  people: PropTypes.array,
  items: PropTypes.array,
};

export default Event;
