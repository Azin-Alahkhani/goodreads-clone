// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';

const App = () => {
  return (
    <Router>
      <Header />  {/* Display header across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
