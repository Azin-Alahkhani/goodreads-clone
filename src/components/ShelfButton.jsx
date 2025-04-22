import React from "react";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { addBookToShelf } from "../redux/shelvesSlice";
import { FindBookInShelves } from "../redux/shelvesSelector";
import { FaCheck, FaPencil } from "react-icons/fa6";

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
  console.log("Book is in:", savedShelfName);
const [selectedShelf, setSelectedShelf] = React.useState( savedShelfName || shelves[0]);



const handleClick = () => {
  const shelfKey = shelfMap[selectedShelf];
  dispatch(addBookToShelf({ shelf: shelfKey, book }));
  console.log(`Added "${book.title}" to ${shelfKey}`);
};


  const handleMenuItemClick = (shelf) => {
    setSelectedShelf(shelf);
    const shelfKey = shelfMap[selectedShelf];
  dispatch(addBookToShelf({ shelf: shelfKey, book }));
    setAnchorEl(null);
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
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
          backgroundColor: savedShelfName?"inherit": "#409d6a",
          color: "#333",
          border: savedShelfName ? "tan 1px solid": "none",
          borderTopLeftRadius: bookdetail ? 20 : 2,
          borderBottomLeftRadius: bookdetail ? 20 :2,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          "&:hover": {
            backgroundColor: savedShelfName?"inherit":"darkgreen",
             border:savedShelfName ? "tan 1px solid": "none",
          },
        }}
      >
         {savedShelfName && bookdetail ? <FaPencil /> : null}{savedShelfName && !bookdetail ? <FaCheck /> : null}
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
      </Menu>
    </Box>
  );
};
export default ShelfButton;