// src/components/HomeSidebarLeft.jsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider , Button } from "@mui/material";
import CurrentlyReadingWidget from "../CurrentlyReadingWidget";
import BookCover from "../../assets/bookcover.webp"
import ReadingChallengeWidget from "../ReadingChallengeWidget";
import WantToReadWidget from "../WantToReadWidget";

const LeftSideBar = ({setGlobalSearchTerm}) => {
    const currentlyReadingBooks = [
  {
    id: "123",
    title: "The Way of Kings",
    cover: BookCover,
    author:"Brandon Sanderson",
  },
];
  return (
    <Box
      sx={{
        width: "300px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap:1,
      }}
    >
      <Box>
      <CurrentlyReadingWidget setGlobalSearchTerm={setGlobalSearchTerm} books={currentlyReadingBooks} />
      </Box>

      <Divider sx={{my:0.5}}/>

      <Box>
        <ReadingChallengeWidget />
      </Box>

      <Divider />

      <Box>
        <WantToReadWidget />
      </Box>

      <Divider />

      <Box>
        <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: "bold", color: "text.primary",textTransform: "uppercase" }}
      >
        bookshelves
      </Typography>
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"start", gap:1}}>
          {["Want to read", "Read", "Currently reading"].map((shelf) => (
            <Button key={shelf} variant="text" sx={{height:"16px",color:"text.green",fontSize:"16px",":hover":{textTransform:"none", textDecoration:"underline", backgroundColor:"inherit"}}}> 0   {shelf}</Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
