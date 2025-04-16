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
import { fetchBooks } from "../utils/FetchBooks.js";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

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

  //const handleSeeAll = () => {
    // Handle the "See All" button click (you can implement your custom logic here)
   // console.log("See All clicked");
  //};
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // Get only the first 5 results
  const limitedOptions = options.length > 12 ? options.slice(0, 5) : options;
  // Show loading spinner if loading

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
        height: "40px",
        position: "relative",
      }}
    >
      <SearchIcon sx={{ color: "gray" }} />
      <Autocomplete
        freeSolo
        sx={{ width: "100%" }}
        options={limitedOptions} // Pass only the first 5 books
        getOptionLabel={(option) => option.title}
        loading={loading}
        open={open}
        onChange={(event, value) => {
    if (value?.id) {
      navigate(`/book/${value.id}`);
    }
  }}
        onInputChange={(e, value) => {
          setSearchTerm(value);
          if (value.length > 0) {
            handleOpen(); // Open dropdown when typing
          } else {
            handleClose(); // Close dropdown when input is empty
          }
        }}
        onBlur={handleClose}
        renderOption={(props, option) => (
          <Box
            component="li"
            key={option.title}
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
            sx={{ ml: 1, flex: 1, height: "100%", width: "100%" }}
          />
        )}
        
      />
    </Box>
  );
};

export default SearchBar;
