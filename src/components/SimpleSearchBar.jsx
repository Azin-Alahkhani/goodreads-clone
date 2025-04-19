import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { InputBase } from "@mui/material";

const SimpleSearchBar = ({ onSearch = ()=>{} }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
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
                  
                      <InputBase
                               placeholder="Search books..."
                               sx={{ ml: 1, flex: 1 }}
                               inputProps={{ "aria-label": "search books" }}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                             />
                            

                  </Box>
                   <Button onClick={handleSearch} variant="outlined" color="black" sx={{ ml: 1, height:"70%", alignSelf:"center" }}>
                               Search
                             </Button>
                             </>
  );
}
export default SimpleSearchBar;