import React from 'react';
import './App.css';
import OnlineStore from './OnlineStore';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // Importing Switch as named import only
import Home from './Home';
import Categories from './Categories';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Categories">
            <Categories />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;