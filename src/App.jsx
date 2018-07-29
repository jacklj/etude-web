import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import Timeline from './components/Timeline';
import UpcomingRep from './components/upcomingRep/UpcomingRep';

const Container = styled.div`
  background-color: rgb(238, 238, 238);
  padding-bottom: 50px;
`;

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

const App = () => (
  <Router>
    <Container>
      <Header>
        <Title>Stanza</Title>
      </Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/upcoming-rep">Upcoming rep</Link>
      </nav>
      <hr />
      <Route exact path="/" component={Timeline} />
      <Route path="/upcoming-rep" component={UpcomingRep} />
    </Container>
  </Router>
);

export default App;
