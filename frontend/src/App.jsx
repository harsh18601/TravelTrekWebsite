import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Adventures from './pages/Adventures';
import Food from './pages/Food';
import Wellness from './pages/Wellness';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/food" element={<Food />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
