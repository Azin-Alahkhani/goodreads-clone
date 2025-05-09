// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyBooks from './pages/MyBooks';
import Search from './pages/Search'; 
import OccasionHeader from './components/OccasionHeader';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery from MUI
import { useLocation } from 'react-router-dom'; // import this!
import FooterWidget from './components/FooterWidget';



const AppContent = ({ setGlobalSearchTerm, isMobile, globalSearchTerm, isSmall }) => {
   const location = useLocation(); // SAFE here
  const isHome = location.pathname === "/";
  const backgroundColor = isHome ? "#f9f7f5" : "#ffffff";
   return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' , width: '100%', backgroundColor:"#f9f7f5"}}>

      <OccasionHeader />
    <Header setGlobalSearchTerm={setGlobalSearchTerm} isSmall={isSmall} />  
    <Box sx={{paddingTop: (isMobile ? "138px" : "92px"), paddingBottom: '20px' , display:"flex",backgroundColor:backgroundColor,  flexDirection:"column",flexGrow:1,overflowX:"auto" , width:"1440px" }}>
      <Routes>
        <Route path="/" element={<Home setGlobalSearchTerm={setGlobalSearchTerm} />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/search" element={<Search globalSearchTerm={globalSearchTerm} />} /> {/* Add the Search route */}
      </Routes>
      </Box>
      {!isHome && <FooterWidget isHome={isHome} />}
  
    </Box>
  );
};
const App = () => {
    const isMobile = useMediaQuery("(max-width:1200px)");
    const isSmall = useMediaQuery("(max-width:767px)");
    const [globalSearchTerm, setGlobalSearchTerm] = React.useState("");
 
    

  return (
   <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', width: '100%' }}>
      <Router>
        <AppContent setGlobalSearchTerm={setGlobalSearchTerm} isMobile={isMobile} globalSearchTerm={globalSearchTerm} isSmall={isSmall} />
      </Router>
    </Box>
  );
};

export default App;
