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
import { Height } from "@mui/icons-material";
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

const ShelfModal = ({ open, handleClose, book, onShelfSelect, bookShelf }) => {
  const shelves = ["Want to Read", "Currently Reading", "Read"];
      console.log("button clicked");
      const [selectedShelf, setSelectedShelf] = useState(bookShelf);
    const handleClickShelf = (shelf)=>{
        setSelectedShelf(shelf)
        
    }
   useEffect(()=>{
    console.log(selectedShelf, bookShelf)
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
            Add to shelf
          </Typography>
          <Button onClick={handleClose}>X</Button>
         </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {book.title}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {shelves.map((shelf) => (
            <Button
              key={shelf}
              fullWidth
              variant="outlined"
              onClick={()=>{handleClickShelf(shelf)}}
              sx={{
                mb: 1,
                borderRadius: 7,
                fontSize:15,
                textAlign:"center",
                textTransform: "none",
                border :"2px solid",
              }}
            >
              {selectedShelf===shelf && <FaCheck/>}{shelf}
            </Button>
          ))}
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
