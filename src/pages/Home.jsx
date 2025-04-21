import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import RightSidebar from '../components/HompePage/RightSideBar';
import LeftSidebar from '../components/HompePage/LeftSideBar';
import Feed from '../components/HompePage/Feed';

const Home = ({setGlobalSearchTerm}) => {
  return (
  <Box 
  sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1440px",
        height:"100%",
        px: 2,
        mt:1.5,
        
      }}
  >
      <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent:"center",
      alignItems:"start",
      gap: 2,
       width: "87%" }}>
        {/* Left Column */}
        <Box sx={{ flex: 1, width: 300 }}>
          <LeftSidebar setGlobalSearchTerm={setGlobalSearchTerm} />
        </Box>

        {/* Center Column (Feed) */}
        <Box sx={{ flex: 2.5, width: 540 }}>
          <Feed />
        </Box>

        {/* Right Column */}
        <Box sx={{ flex: 1, width: 300 }}>
          <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
