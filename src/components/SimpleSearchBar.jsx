import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const SimpleSearchBar = ({ onSearch = ()=>{} }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
     <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: 0.8,
                      border: "1px solid #dcd7cc",
                      px: 1,
                      maxWidth: 700,
                      width: "100%",
                      height: "35px",
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
}
export default SimpleSearchBar;