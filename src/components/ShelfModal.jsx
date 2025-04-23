// ShelfModal.jsx
import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Slide,
  Backdrop,
  Divider,
  Button,
} from "@mui/material";
import { FaCheck } from "react-icons/fa";

const style = {
  position: "absolute",
  bottom: 450,
  left: 0,
  right: 0,
  mx: "auto",
  width: "335px",
  //height:"365px",
  maxWidth: 500,
  bgcolor: "white",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  boxShadow: 24,
  p: 3,
  outline: "none",
  
  overflowY: "auto",
  transition: "transform 0.3s ease-in-out",
};

const ShelfModal = ({ open, handleClose,book, onShelfSelect, handleRemoveFromShelf , shelves }) => {
  
      console.log("button clicked");
      const [selectedShelf, setSelectedShelf] = useState(book.shelves);
      console.log("book in :", book.shelves)
    
      const handleClickShelf = (shelf)=>{
        setSelectedShelf(shelf)
        
    }
   

const showCheck = (shelf)=>{
  if(shelf ===selectedShelf)
    return true
  return false;
}

useEffect(()=>{
 
},[selectedShelf])
    
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          sx: { backgroundColor: "rgba(0,0,0,0.4)" },
        },
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box sx={style}>
         <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
             <Typography variant="h6" fontWeight="bold" mb={1}>
            Add this book to your shelf
          </Typography>
          <Button onClick={handleClose}>X</Button>
         </Box>
         
          <Box sx={{mb:3}}></Box>
          {shelves.map((shelf) => (
            <Button
              key={shelf}
              fullWidth
              variant="outlined"
              onClick={()=>{handleClickShelf(shelf)}}
              sx={{
                mb: 1,
                display:"inline-flex",
                gap:1,
                borderRadius: 7,
                fontSize:15,
                textAlign:"center",
                textTransform: "none",
                border :"2px solid",
              }}
            >
              {showCheck(shelf) && <FaCheck />}{shelf}
            </Button>
          ))}
          {book.shelves &&  <Button
          fullWidth
              variant="text"
              sx={{
               
                fontSize:15,
                textAlign:"center",
                
                mb: 1,
               
                textTransform: "none",
              }}
              onClick={handleRemoveFromShelf}
          >Remove from your shelves</Button>}
          <Button
          fullWidth
              variant="outlined"
              sx={{
                backgroundColor:"goodreads.black",
                fontSize:15,
                textAlign:"center",
                color:"white",
                mb: 1,
                borderRadius: 7,
                border :"2px solid",
                textTransform: "none",
              }}
              onClick={()=>{
                onShelfSelect(selectedShelf);
                //handleClose();
              }}
          >Continue to tags</Button>
        </Box>
      </Slide>
    </Modal>
  );
};

export default ShelfModal;
