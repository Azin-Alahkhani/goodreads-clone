import React from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {


  return (
  
     <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: 1,
            px: 1,
            maxWidth: 700,
            width: "100%",
          }}
        >
          <SearchIcon sx={{ color: "gray" }} />
          <InputBase
            placeholder="Search books..."
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "search books" }}
          />
        </Box>
  );
};
export default SearchBar;