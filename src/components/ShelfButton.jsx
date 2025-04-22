import React from "react";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { addBookToShelf } from "../redux/shelvesSlice";

const shelves = ["Want to Read", "Currently Reading", "Read"];
const shelfMap = {
  "Want to Read": "wantToRead",
  "Currently Reading": "currentlyReading",
  "Read": "read",
};
 const ShelfButton = ({bookdetail=false, book}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedShelf, setSelectedShelf] = React.useState(shelves[0]);

  const dispatch = useDispatch();

const handleClick = () => {
  const shelfKey = shelfMap[selectedShelf];
  dispatch(addBookToShelf({ shelf: shelfKey, book }));
  console.log(`Added "${book.title}" to ${shelfKey}`);
};


  const handleMenuItemClick = (shelf) => {
    setSelectedShelf(shelf);
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
          backgroundColor: "#409d6a",
          color: "#333",
          borderTopLeftRadius: bookdetail ? 20 : 2,
          borderBottomLeftRadius: bookdetail ? 20 :2,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          "&:hover": {
            backgroundColor: "darkgreen",
          },
        }}
      >
        {selectedShelf}
      </Button>
      <Button
        onClick={handleDropdownClick}
        variant="contained"
        sx={{
          minWidth: 36,
          px: 0.5,
          textTransform: "none",
          backgroundColor: "#409d6a",
          color: "#333",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: bookdetail ? 20 :2,
          borderBottomRightRadius:  bookdetail ? 20 :2,
          borderLeft: "1px solid #b6d7b2", // visual separation
          "&:hover": {
            backgroundColor: "oklch(52.7% 0.154 150.069)",
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