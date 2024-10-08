import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutNavbar from './layouts/LayoutNavbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LayoutNavbar />}>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
