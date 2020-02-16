import React from 'react';
import './static/App.css';
import Messenger from './pages/Messenger';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom";
import {
  Container,
} from 'react-bootstrap';


export default function App() {
  return (
    <Router>
      <Container>
        <Navigation />
        <hr />
        <Switch>
          <Route path="/Messenger">
            <Messenger className={'content'} />
          </Route>
          <Route path="/">
            <Home className={'content'} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

