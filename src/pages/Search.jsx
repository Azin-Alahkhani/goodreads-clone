import React from "react";
import SimpleSearchBar from "../components/SimpleSearchBar";
import { fetchBooks } from "../utils/FetchBooks.js";
import TableComponent from "../components/Table.jsx";
import { Box, Typography, Link } from "@mui/material";


import { useState , useEffect } from "react";

const Search = ({globalSearchTerm}) => {

const searchTerm = globalSearchTerm ;
  //const books = fetchBooks({query:searchTerm,  maxR: 10 });

     const [books, setBooks] = useState([]);
   useEffect(() => {
    if (!searchTerm) return;
    const fetchData = async () => {
      try {
        const data = await fetchBooks({ query: searchTerm, maxR: 4 });
        setBooks(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
     <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
            px:25,
            mt:1,
            gap: 2,
          }}
        >
      {/* Left Column (Main Search + Results) */}
      <Box sx={{ flex: 3 , mt: 2 , width:"643px"}}>

            <Typography
            variant="h4">Search</Typography>
        {/* SearchBar on top */}
        <SimpleSearchBar />

        {/* Search Results */}
        <Box sx={{ mt: 3 }}>
         {books.length>0  ? (
    books.map((book) => <SearchResultItem key={book.id} book={book} />)
  ) : (
    <Typography>No results found.</Typography>
  )}
        </Box>

        {/* Filters (below results or as a sticky bar if needed) */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1">Filters</Typography>
          {/* Add checkbox filters, dropdowns, etc. */}
        </Box>
      </Box>

      {/* Right Column (Sidebar) */}
      <Box
        sx={{
          flex: 1,
          minWidth: 250,
          position: "sticky",
          top: 80,
          mt:2,
          alignSelf: "flex-start",
          height: "fit-content",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Related Shelves
        </Typography>
        {/* Replace with actual shelf data */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {["Fantasy", "Historical Fiction", "Sci-Fi", "Thriller"].map(
            (shelf, i) => (
              <Box
                key={i}
                sx={{
                  p: 1,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                {shelf}
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Search;




const SearchResultItem = ({ book }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      paddingY: 2,
      borderBottom: "1px solid #ddd",
      width: "100%",
      height: "fit-content",
    }}
  >
    {/* Book Cover */}
    <Box
      sx={{
        width: 80,
        flexShrink: 0,
      }}
    >
      <img
        src={book.cover || "/placeholder.jpg"}
        alt={book.title}
        style={{ width: "49px", height: "75px", objectFit: "cover" }}
      />
    </Box>

    {/* Book Info */}
    <Box sx={{ display: "flex", flexDirection: "column"}}>
      <Link
        component={Link}
        to={`/book/${book.id}`}
        underline="hover"
        color="inherit"
        sx={{ fontWeight: "bold", fontSize: "1rem" }}
      >
        {book.title}
      </Link>
      <Typography variant="body2" sx={{ color: "black" }}>
        by {book.author || "Unknown Author"}
      </Typography>
      <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
        ★ {book.avgRating || "N/A"}
      </Typography>
     
    </Box>
  </Box>
);
