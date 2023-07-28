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
      <div class="jumbotron">
        

          <h1>Online Store</h1>

          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">Submit</button>
            </form>
          </div>  

        
      </div>
      <div>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid" id="centered-content">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
              </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li>
                  <Link to="/Categories">Department</Link>
                </li>
                <li>
                  <Link to="/">Hot Deals</Link>
                </li>
                <li>
                  <Link to="/">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/">Clearance</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
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