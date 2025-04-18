import React from "react";
import SimpleSearchBar from "../components/SimpleSearchBar";
import { fetchBooks } from "../utils/FetchBooks.js";
import TableComponent from "../components/Table.jsx";
import { Box, Typography, Link, Rating, Button } from "@mui/material";
import {ShelfButton} from "../components/ShelfButton.jsx";
import BookHorizontalCard from "../components/BookHorizontalCard.jsx";
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
            variant="h4" sx={{mb:"15px", fontFamily:"monospace"}}><strong>Search</strong></Typography>
        {/* SearchBar on top */}
        <Box sx={{ display: "flex" , p:1 , bgcolor: "#f5f1e9", borderRadius: 1, mb: 2, flexDirection: "column", gap: 2, justifyContent:"space-between"}}> 
               
               <Box sx={{ display: "flex", width:"590px" }} ><SimpleSearchBar /></Box> 
                <Box>
                   
                        <Box sx={{ display: "flex", flexDirection: "row", gap: 1}}>
                            {["all","author", "title"].map((filter, index) => (
                                <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                                    <input
                                        type="radio"
                                        id={`filter-${filter}`}
                                        name="filter"
                                        value={filter}
                                       
                                        onChange={(e) => console.log(`Selected filter: ${e.target.value}`)}
                                    />
                                    <label htmlFor={`filter-${filter}`} style={{  fontSize:"13px", color:"black"}}>
                                        {filter}
                                    </label>
                                </Box>
                            ))}
                        </Box>
                   
                </Box>
        </Box>
    

        {/* Search Results */}
        <Box sx={{ mt: 3 }}>
         {books.length>0  ? (
    books.map((book) => <BookHorizontalCard key={book.id} book={book} />)
  ) : (
    <Typography>No results found.</Typography>
  )}
        </Box>

        {/* Pagination or Load More Button */}
      </Box>

      {/* Right Column (Sidebar) */}
      <Box
        sx={{
          flex: 1,
          minWidth: 250,
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




