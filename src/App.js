import React, { Component } from 'react';
import styled from 'styled-components';

import eventData from './eventData';
import Event from './components/Event';
import { sortEventsReverseChronological } from './services/datetime';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

class App extends Component {
  render() {
    const eventDataReverseChronological = sortEventsReverseChronological(eventData);
    return (
      <div className="App">
        <Header>
          <Title>Stanza</Title>
        </Header>
        <div>
          {eventDataReverseChronological.map(event => <Event
            name={event.name}
            start={event.start}
            end={event.end}
            type={event.type}
            rating={event.rating}
            location={event.location}
            people={event.people}
            items={event.items}
          />)}
        </div>
      </div>
    );
  }
}

export default App;
