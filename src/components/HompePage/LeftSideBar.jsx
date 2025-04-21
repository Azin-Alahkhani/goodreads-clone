// src/components/HomeSidebarLeft.jsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import CurrentlyReadingWidget from "../CurrentlyReadingWidget";
import BookCover from "../../assets/bookcover.webp"

const LeftSideBar = () => {
    const currentlyReadingBooks = [
  {
    id: "123",
    title: "The Way of Kings",
    cover: BookCover,
  },
];
  return (
    <Box
      sx={{
        minWidth: "200px",
        maxWidth: "250px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
      <CurrentlyReadingWidget books={currentlyReadingBooks} />
      </Box>

      <Divider />

      <Box>
        <Typography variant="body1" fontWeight="bold" fontSize={14}>
          Reading Challenge
        </Typography>
        <List dense>
          <ListItem button="true">
            <ListItemText primary="View Challenge" />
          </ListItem>
        </List>
      </Box>

      <Divider />

      <Box>
        <Typography variant="body1" fontWeight="bold" fontSize={14}>
          Want to Read
        </Typography>
        <List dense>
          {["Book A", "Book B"].map((book) => (
            <ListItem key={book} button="true">
              <ListItemText primary={book} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box>
        <Typography variant="body1" fontWeight="bold" fontSize={14}>
          Your Shelves
        </Typography>
        <List dense>
          {["Want to read", "Read", "Currently reading"].map((shelf) => (
            <ListItem key={shelf} button="true">
              <ListItemText primary={shelf} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
