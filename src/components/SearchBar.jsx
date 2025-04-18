import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  InputBase,
  Button,
  CircularProgress,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { fetchBooks } from "../utils/FetchBooks.js";

const SearchBar = ({setGlobalSearchTerm}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBooks = async () => {
      if (searchTerm.length < 3) {
        setOptions([]);
        setShowDropdown(false);
        return;
      }
      setLoading(true);
      const books = await fetchBooks({ query: searchTerm, maxR: 5 });
      setOptions(books);
      setLoading(false);
      setShowDropdown(true);
    };

    const debounce = setTimeout(loadBooks, 300);
    return () => clearTimeout(debounce);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (book) => {
    navigate(`/book/${book.id}`);
    setSearchTerm("");
    setShowDropdown(false);
  };

  const handleSeeAll = () => {
    navigate("/search", { state: { searchTerm } });
    setSearchTerm("");
    setShowDropdown(false);
    setGlobalSearchTerm(searchTerm);
  };

  return (
    <Box sx={{ position: "relative", maxWidth: 400, width: "100%" }} ref={dropdownRef}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 0.8,
          border: "1px solid #dcd7cc",
          px: 1,
          height: "40px",
        }}
      >
        <SearchIcon sx={{ color: "gray" }} />
        <InputBase
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books..."
          sx={{ ml: 1, flex: 1, height: "100%" }}
        />
        {loading && <CircularProgress size={20} sx={{ ml: 1 }} />}
      </Box>

    {showDropdown && options.length > 0 && (
  <Paper
    elevation={3}
    sx={{
      position: "absolute",
      top: "100%", // stick right under input
      left: 0,
      right: 0,
      zIndex: 10,
      borderRadius: 1,
      // Removed mt: 1, maxHeight, and overflow
    }}
  >
    <List dense disablePadding>
      {options.map((book) => (
        <ListItem
          key={book.id}
          button
          onClick={() => handleSelect(book)}
          sx={{ px: 2 }}
        >
          <ListItemAvatar>
            <Avatar
              variant="square"
              src={book.cover}
              sx={{ width: 40, height: 60 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography noWrap fontSize="0.9rem" fontWeight="bold">
                {book.title}
              </Typography>
            }
            secondary={
              <Typography noWrap fontSize="0.75rem" color="text.secondary">
                {book.author}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
    <Button
      fullWidth
      variant="text"
      onClick={handleSeeAll}
      sx={{
        borderTop: "1px solid #eee",
        py: 1,
        color:"black",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      Show all results for "{searchTerm}"
    </Button>
  </Paper>
)}

    </Box>
  );
};

export default SearchBar;
