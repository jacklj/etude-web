import React, { Component } from 'react';
import './App.css';
import eventData from './eventData';
import Event from './components/Event';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Singprocess</h1>
        </header>
        <div>
          {eventData.map(event => <Event
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
