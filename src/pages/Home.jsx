import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import RightSidebar from '../components/HompePage/RightSideBar';
import LeftSidebar from '../components/HompePage/LeftSideBar';
import Feed from '../components/HompePage/Feed';

const Home = () => {
  return (
  <Box 
  sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1440px",
        px: 2,
      }}
  >
      <Box sx={{
      display: "flex",
      flexDirection: "row",
      //minWidth: "1000px", // ensure it doesn't wrap early
      //width: "100%",
      justifyContent:"center",
      gap: 2,
       width: "72%" }}>
        {/* Left Column */}
        <Box sx={{ flex: 1, width: 300 }}>
          <LeftSidebar />
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
