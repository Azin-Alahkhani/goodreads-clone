// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyBooks from './pages/MyBooks';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery from MUI


const App = () => {
    const isMobile = useMediaQuery("(max-width:1200px)");

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' , width: '100%', flexGrow: 1}}>
    <Router>
      <Header />  {/* Display header across all pages */}
      <Box sx={{paddingTop: (isMobile ? "110px" : "64px"), paddingBottom: '20px' , display:"flex", justifyContent:"center",flexGrow:1,overflowX:"auto" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/my-books" element={<MyBooks />} />
      </Routes>
      </Box>
    </Router>
    </Box>
  );
};

export default App;
