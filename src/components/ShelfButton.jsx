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
import { FaPencil } from "react-icons/fa6";

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
  

  return (
    <Box sx={{ display: "inline-flex", borderRadius: 2, overflow: "hidden", height:!bookdetail ? "25px" :"40px",
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
          border: savedShelfName ? "black 1px solid": "none",
          borderTopLeftRadius: bookdetail ? 20 : 2,
          borderBottomLeftRadius: bookdetail ? 20 :2,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          "&:hover": {
            backgroundColor: savedShelfName?"inherit":"darkgreen",
             border:savedShelfName ? "black 1px solid": "none",
          },
        }}
      >
       {savedShelfName ? <FaPencil /> : null}{selectedShelf}
      </Button>
      <Button
        onClick={handleDropdownClick}
        variant="contained"
        sx={{
          minWidth: 36,
          px: 0.5,
          textTransform: "none",
          backgroundColor:savedShelfName?"inherit": "#409d6a",
          border: savedShelfName ? "black 1px solid": "none",
          color: "#333",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: bookdetail ? 20 :2,
          borderBottomRightRadius:  bookdetail ? 20 :2,
          borderLeft: "1px solid rgb(74, 75, 74)", // visual separation
          "&:hover": {
            backgroundColor: savedShelfName?"inherit":"oklch(52.7% 0.154 150.069)",
            border:savedShelfName ? "black 1px solid": "none",
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