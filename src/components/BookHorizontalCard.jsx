import React from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShelfButton from "./ShelfButton.jsx"; // Assuming you have a ShelfButton component

const BookHorizontalCard = ({ book }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: 1,
      paddingY: 1,
      borderBottom: "1px solid #ddd",
      width: "100%",
      height: "fit-content",
    }}
  >
    {/* Book Cover */}
    <Button
      component={Link}
        to={`/book/${book.id}`} 
        color="inherit"
        sx={{   width: 80,
        flexShrink: 0,fontWeight: "bold", fontSize: "1rem" , ":hover":{textTransform:"none", color:"darkgreen", background:"none"}}}
    >
      <img
        src={book.cover || "/placeholder.jpg"}
        alt={book.title}
        style={{ width: "49px", height: "75px", objectFit: "cover" }}
      />
    </Button>

    {/* Book Info */}
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Button
        component={Link}
        to={`/book/${book.id}`}
        
        color="inherit"
        sx={{ fontWeight: "bold", height:"50%",fontSize: "1rem" , ":hover":{textTransform:"none", color:"darkgreen", background:"none"}}}
      >
        {book.title}
      </Button>
      <Typography variant="body2" sx={{ color: "black" , ml:1 }}>
        by {book.author || "Unknown Author"}
      </Typography>
      <Box  sx={{ display: "block", mt: 1 }}>
        
        <Rating
                    value={book.avgRating || 0}
                    precision={0.5}
                    readOnly
                   size="large"
                  />
      </Box>
      <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
 <ShelfButton />

</Box>

     
    </Box>
  </Box>
);

export default BookHorizontalCard;