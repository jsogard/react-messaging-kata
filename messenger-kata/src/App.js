import React from 'react';
import './static/App.css';
import Messenger from './pages/Messenger';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Messenger">Messenger</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Messenger">
            <Messenger />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

