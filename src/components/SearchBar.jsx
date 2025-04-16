import React, { useState, useEffect } from "react";
import {
  Box,
  InputBase,
  Button,
  CircularProgress,
  Autocomplete,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchBooks} from "../utils/FetchBooks.js";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadBooks = async () => {
      if (searchTerm.length < 3) return setOptions([]);
      console.log("Loading books for: ", searchTerm);
      setLoading(true);
      const books = await fetchBooks(searchTerm);
      setOptions(books);
      setLoading(false);
    };
   
    const delayDebounce = setTimeout(() => {
      loadBooks();
    }, 300); // debounce a bit

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);
 const handleSeeAll = () => {
      // Handle the "See All" button click
      console.log("See All clicked");
    }
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
        height: "40px", // Set fixed height for the input box
        position: "relative", // Set parent container to relative for Popper positioning
        zIndex: 1000, // Ensure that the search bar stays on top
      }}
    >
      <SearchIcon sx={{ color: "gray" }} />
      <Autocomplete
        freeSolo
        sx={{ width: "100%" }}
        options={options}
        getOptionLabel={(option) => option.title}
        loading={loading}
        onInputChange={(e, value) => setSearchTerm(value)}
        renderOption={(props, option) => (
          <Box
            component="li"
            {...props}
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 1,
              px: 1,
            }}
          >
            <img
              src={option.cover}
              alt={option.title}
              style={{ width: 40, height: 60, objectFit: "cover" }}
            />
            <Box>
              <Typography variant="body2" noWrap>
                {option.title}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {option.author}
              </Typography>
            </Box>
           
           
          </Box>
        )}
        renderInput={(params) => (
          <InputBase
            ref={params.InputProps.ref}
            inputProps={params.inputProps}
            placeholder="Search books..."
            sx={{ ml: 1, flex: 1, height: "100%" }} // Make sure input box height remains consistent
          />
        )}
        PopperComponent={(props) => (
          <div
            {...props}
            style={{
              width: "100%", 
              position: "absolute", // Keep it positioned relative to the parent
              top: "100%", // Make the dropdown appear below the input
              left: 0, // Align the dropdown with the input
              zIndex: 999, // Ensure dropdown appears above other elements
              maxHeight: "300px", // Optional: Limit the dropdown height if there are many options
              overflowY: "auto", // Scrollable dropdown
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;
