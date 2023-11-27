import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../src/App';
import { Navbar } from '../src/App';
import Skills from '../src/Skills';
import Contact from '../src/Contact';

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/portfolio' element={<App />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<App />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
