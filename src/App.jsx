import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux/store';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline/Timeline';
import Lesson from './components/Lesson/Lesson';
import PracticeSession from './components/PracticeSession/PracticeSession';
import UpcomingRep from './components/upcomingRep/UpcomingRep';
import Performance from './components/Performance/Performance';

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

const App = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container>
        <Header>
          <Title>Etude</Title>
        </Header>
        <Navigation />
        <hr />
        <Route exact path="/" component={Timeline} />
        <Route path="/upcoming-rep" component={UpcomingRep} />
        <Route path="/lesson/:id" component={Lesson} />
        <Route path="/practice_session/:id" component={PracticeSession} />
        <Route path="/performance/:id" component={Performance} />
      </Container>
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default App;
