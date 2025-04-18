import React from "react";
import { Box, Typography } from "@mui/material";
import SimpleSearchBar from "../components/SimpleSearchBar";
import { fetchBooks } from "../utils/FetchBooks.js";
import TableComponent from "../components/Table.jsx";

import { useState } from "react";

const Search = ({globalSearchTerm}) => {

const searchTerm = globalSearchTerm ;
  //const books = fetchBooks({query:searchTerm,  maxR: 10 });

     const [books, setBooks] = useState([]);
    fetchBooks({ query: searchTerm, maxR: 10 }).then((data) => {
      setBooks(data)});

  return (
     <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
            px:35,
            mt:1,
          }}
        >
      {/* Left Column (Main Search + Results) */}
      <Box sx={{ flex: 3 , mt: 2 }}>
        {/* SearchBar on top */}
        <SimpleSearchBar />

        {/* Search Results */}
        <Box sx={{ mt: 3 }}>
         {books.length>0 &&  <TableComponent books={books} />}
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
