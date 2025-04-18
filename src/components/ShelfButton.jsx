import React, { useState } from "react";
import { Button, Menu, MenuItem, Box } from "@mui/material";

import { ArrowDropDown } from "@mui/icons-material";

const ShelfButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [shelf, setShelf] = useState("Want to Read");

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (newShelf) => {
    setShelf(newShelf);
    handleClose();
  };

  console.log("Selected shelf:", shelf);

  return (
    <Box>
      <Button
        variant="contained"
        color="success"
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{ textTransform: "none" }}
      >
        {shelf}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {["Want to Read", "Currently Reading", "Read"].map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};


export  default ShelfButton;
