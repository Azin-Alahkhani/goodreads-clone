import React from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShelfButton from "./ShelfButton.jsx"; 
const BookHorizontalCard = ({ book , isBig=true }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: 1,
      paddingY: 1,
      borderBottom: isBig ? "1px solid #ddd" : "none",
      width: "100%",
      
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
        alt="no img"
        style={{ width: isBig? "49px" : "95px", height: isBig? "75px" : "140px", objectFit: "cover" }}
      />
    </Button>

    {/* Book Info */}
    <Box sx={{ display: "flex", flexDirection: "column", height:"25px" , ml: isBig ? 0 : 2}}>
      <Button
        component={Link}
        to={`/book/${book.id}`}
        
        color="inherit"
        sx={{ fontWeight: "bold", height:"50%",fontSize: "1rem", justifyContent:"flex-start" , ":hover":{textTransform:"none", color:"darkgreen", background:"none"}}}
      >
        {book.title}
      </Button>
      <Typography variant="body2" sx={{ color: "#41270e" , ml:1 }}>
        by {book.author || "Unknown Author"}
       {isBig && <Typography variant="caption" color="grey" fontSize={"10px"} > (Mygoodreads author)</Typography>}
      </Typography>
      <Box  sx={{ display: "flex", flexDirection: "row", mb:1, ml:1}}>
        
        <Rating
                    value={book.avgRating || 0}
                    precision={0.5}
                    readOnly
                   size="small"
                  />
                  {isBig && <Typography variant="caption" alignSelf={"center"} color="grey" fontSize={"10px"}>4.18 avg rating — 1,328,045 ratings — published 2020 — 138 editions</Typography>}
      </Box>
      <Box sx={{width:"150px"}}>
         <ShelfButton bookdetail={false} book={book} />
      </Box>
    </Box>
  </Box>
);

export default BookHorizontalCard;