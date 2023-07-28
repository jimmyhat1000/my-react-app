import React from 'react';
import './App.css';
import OnlineStore from './OnlineStore';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importing Routes as named import only
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;