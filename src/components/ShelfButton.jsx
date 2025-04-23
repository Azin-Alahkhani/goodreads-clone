import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { addBookToShelf, removeBookFromShelf } from "../redux/shelvesSlice";
import { FindBookInShelves } from "../redux/shelvesSelector";
import { FaCheck, FaPencil } from "react-icons/fa6";
import ShelfModal from "./ShelfModal";

const shelves = ["Want to Read", "Currently Reading", "Read"];
const shelfMap = {
  "Want to Read": "wantToRead",
  "Currently Reading": "currentlyReading",
  "Read": "read",
};

 const ShelfButton = ({bookdetail=false, book}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const dispatch = useDispatch();
  const savedShelfName = useSelector((state) => FindBookInShelves(state, book.id));
  
const [selectedShelf, setSelectedShelf] = React.useState( savedShelfName || shelves[0]);
const isShelved = savedShelfName ? true : false;

  console.log(book.id," is in ",savedShelfName)


const handleClick = () => {
  if(!bookdetail){
  const shelfKey = shelfMap[selectedShelf];
  console.log(`Added "${book.title}" to ${shelfKey}`);

  if(savedShelfName){
    handleRemoveFromShelf();
  }
  dispatch(addBookToShelf({ shelf: shelfKey, book }));
  
  
  }
  else {
    setShowModal(true);

  }
};

const [showModal,setShowModal]= useState(false)

    const handleRemoveFromShelf=()=>{
      const shelfKey = shelfMap[savedShelfName];
      console.log(`removing "${book.id}" from  ${shelfKey}`,savedShelfName);
      if(shelfKey)
      dispatch(removeBookFromShelf({shelf:shelfKey, bookId:book.id}));
      setShowModal(false);
      //setSavedShelfName(null)

    }
    useEffect(() => {
  setSelectedShelf(savedShelfName || shelves[0]);
}, [savedShelfName]);

  const handleMenuItemClick = (shelf) => {
    setSelectedShelf(shelf);
    
    const shelfKey = shelfMap[shelf];
    console.log(shelf,savedShelfName , shelfKey)
  dispatch(addBookToShelf({ shelf: shelfKey, book }));
    setAnchorEl(null);
    setShowModal(false);
  };

  const handleDropdownClick = (event) => {
    if(!bookdetail)
    setAnchorEl(event.currentTarget);
  else setShowModal(true);
  };
  

  //const openModal = ()=>{}
  

  return (
    <Box sx={{ display: "inline-flex", borderRadius: 2, maxHeight:!bookdetail ? "23px" :"40px",minHeight:!bookdetail ? "23px" :"40px",
       width:!bookdetail?"135px" : "400px", boxShadow:"none"
 }}>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          textTransform: "none",
          display:"inline-flex",
          gap:1,
          backgroundColor: isShelved ?"inherit": "#409d6a",
          color: "#333",
          border: isShelved ? "tan 1px solid": "none",
          borderTopLeftRadius: bookdetail ? 20 : 2,
          borderBottomLeftRadius: bookdetail ? 20 :2,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          "&:hover": {
            backgroundColor: isShelved ?"inherit":"darkgreen",
             border:isShelved ? "tan 1px solid": "none",
          },
        }}
      >
         {isShelved && bookdetail ? <FaPencil /> : null}{isShelved && !bookdetail ? <FaCheck /> : null}
        <span
    style={{
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "inline-block",
      width: "100%",
    }}
  >
     {selectedShelf}
  </span>
      
      </Button>
      <Button
        onClick={handleDropdownClick}
        variant="contained"
        sx={{
          minWidth: 26,
          px: 0.5,
          textTransform: "none",
          backgroundColor:savedShelfName && bookdetail ?"inherit": "#409d6a",
          border: savedShelfName && bookdetail ? "tan 1px solid": "none",
          color: "#333",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: bookdetail ? 20 :2,
          borderBottomRightRadius:  bookdetail ? 20 :2,
          borderLeft: "1px solid rgb(74, 75, 74)", // visual separation
          "&:hover": {
            backgroundColor: savedShelfName && bookdetail ?"inherit":"oklch(52.7% 0.154 150.069)",
            border:savedShelfName && bookdetail ? "tan 1px solid": "none",
          },
        }}
      >
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {shelves.map((shelf) => (
          <MenuItem
            key={shelf}
            selected={shelf === selectedShelf}
            onClick={() => handleMenuItemClick(shelf)}
          >
            {shelf}
          </MenuItem>
        ))}
        <MenuItem onClick={()=>{
          handleRemoveFromShelf()
          setAnchorEl(null)
        }}>Remove from shelves</MenuItem>
      </Menu>
     {showModal && <ShelfModal shelves={shelves} handleRemoveFromShelf={handleRemoveFromShelf} bookShelf={savedShelfName} open={showModal} book={book} handleClose={()=>setShowModal(false)} onShelfSelect={handleMenuItemClick}/>}
    </Box>
  );
};
export default ShelfButton;