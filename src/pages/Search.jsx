import React from "react";
import SimpleSearchBar from "../components/SimpleSearchBar";
import { fetchBooks } from "../utils/FetchBooks.js";
import TableComponent from "../components/Table.jsx";
import {
  Box,
  Typography,
  Link,
  Rating,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";
import BookHorizontalCard from "../components/BookHorizontalCard.jsx";
import { useState, useEffect } from "react";

const Search = ({ globalSearchTerm }) => {
  const searchTerm = globalSearchTerm;
  //const books = fetchBooks({query:searchTerm,  maxR: 10 });
  const [insideSearchTerm, setInsideSearchTerm] = useState("");
  const [relatedShelves, setRelatedShelves] = useState([]);
  const [loading, setLoading] = useState(false);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (!searchTerm) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchBooks({ query: searchTerm, maxR: 10 });
        setBooks(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch failed:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    if (!insideSearchTerm) return;
    const fetchData = async () => {
      try {
        const data = await fetchBooks({ query: insideSearchTerm, maxR: 4 });
        setBooks(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    fetchData();
  }, [insideSearchTerm]);
  useEffect(() => {
    if (books.length > 0) {
      setRelatedShelves(books[0].categories);
    }
  }, [books]);
  useEffect(() => {}, [relatedShelves]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        maxWidth: "1200px",
        px: 15,
        mt: 1,
        gap: 2,
      }}
    >
      {loading && <CircularProgress />}
      {!loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          {/* Left Column (Main Search + Results) */}
          <Box sx={{ flex: 3, mt: 2, width: "643px" }}>
            <Typography
             
              sx={{ mb: "15px", fontFamily: "Nimbus Sans Novus" , fontSize:"25px", fontWeight:"bold", color:"#41270e" }}
            >
              <strong>Search</strong>
            </Typography>
            {/* SearchBar on top */}
            <Box
              sx={{
                display: "flex",
                p: 1,
                bgcolor: "#f5f1e9",
                borderRadius: 1,
                mb: 2,
                flexDirection: "column",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", width: "590px" }}>
                <SimpleSearchBar onSearch={setInsideSearchTerm} />
              </Box>
              <Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  {["all", "author", "title"].map((filter, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="radio"
                        id={`filter-${filter}`}
                        name="filter"
                        value={filter}
                        onChange={(e) =>
                          console.log(`Selected filter: ${e.target.value}`)
                        }
                      />
                      <label
                        htmlFor={`filter-${filter}`}
                        style={{ fontSize: "13px", color: "black" }}
                      >
                        {filter}
                      </label>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Search Results */}
            <Box sx={{ mt: 3 }}>
              {books.length > 0 ? (
                books.map((book) => (
                  <BookHorizontalCard key={book.id} book={book} />
                ))
              ) : (
                <Typography>No results found.</Typography>
              )}
            </Box>

            {/* Pagination or Load More Button */}
          </Box>

          {/* Right Column (Sidebar) */}
          {/* Sidebar */}
          <Grid
            sx={{
              width: "200px",
              flexShrink: 0,
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "Nimbus Sans Novus",
                fontWeight: "bold",
                fontSize: 10,
                mt: 10,
                ml: 5,
              }}
            >
              RELATED SHELVES
            </Typography>
            <List dense sx={{ ml: 5 }}>
              {[
                "Fiction",
                "Young adult",
                "Science fiction",
                "Romance",
                "Classic",
              ].map((shelf) => (
                <ListItem key={shelf} button>
                  <ListItemText primary={shelf} />
                </ListItem>
              ))}
            </List>

            {/*<Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "Arial", fontWeight: "bold", fontSize: 14 }}
            >
              Related Shelves
            </Typography>
            <List dense>
              {relatedShelves  && relatedShelves.map((shelf) => (
                <ListItem key={shelf} button>
                  <ListItemText primary={shelf} />
                </ListItem>
              ))}
            </List>*/}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Search;
