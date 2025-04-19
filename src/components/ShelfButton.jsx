import React from "react";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const shelves = ["Want to Read", "Currently Reading", "Read"];

 const ShelfButton = ({bookdetail=false}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedShelf, setSelectedShelf] = React.useState(shelves[0]);

  const handleClick = () => {
    console.log(`Added to shelf: ${selectedShelf}`);
  };

  const handleMenuItemClick = (shelf) => {
    setSelectedShelf(shelf);
    setAnchorEl(null);
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ display: "inline-flex", borderRadius: 2, overflow: "hidden" }}>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "green",
          color: "#333",
          borderTopLeftRadius:bookdetail? 16 : 2,
          borderBottomLeftRadius: bookdetail ? 16 :2,
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
          backgroundColor: "green",
          color: "#333",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: bookdetail ? 16 :2,
          borderBottomRightRadius:  bookdetail ? 16 :2,
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