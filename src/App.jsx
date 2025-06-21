import React from 'react';
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css';
import Profile from './components/profile';
import Contact from './components/Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;