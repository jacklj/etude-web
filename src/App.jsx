import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import Timeline from './components/Timeline';
import AddLesson from './components/AddLesson';
import EditLesson from './components/EditLesson';
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

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
  font-size: 1.2em;
`;

const App = () => (
  <Router>
    <Container>
      <Header>
        <Title>Stanza</Title>
      </Header>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/upcoming-rep">Upcoming rep</StyledLink>
        <StyledLink to="/add-lesson">Add lesson</StyledLink>
      </Nav>
      <hr />
      <Route exact path="/" component={Timeline} />
      <Route path="/upcoming-rep" component={UpcomingRep} />
      <Route path="/add-lesson" component={AddLesson} />
      <Route path="/edit-lesson/:id" component={EditLesson} />
    </Container>
  </Router>
);

export default App;
