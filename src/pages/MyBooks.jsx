import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBooks } from "../utils/FetchBooks.js"; 
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import SimpleSearchBar from "../components/SimpleSearchBar.jsx";
import TableComponent from "../components/Table.jsx";




const MyBooks = () => {

    const [books, setBooks] = useState([]);

useEffect(() => {
  fetchBooks({query:"lord of", maxR:10}).then(setBooks);
}, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1200px",
        px: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", px: 2 }}>
        {/* Top: Title and SearchBar and Buttons */}
        <Box
          sx={{
            display: "flex",
            overflow: "auto",
            alignItems: "center",
            gap: 2,
            my: 2,
            mt: 4,
          }}
        >
          {/* Left: Title */}
          <Typography
            variant="h6"
            sx={{ fontFamily: "Arial", justifySelf: "start" }}
          >
            My Books
          </Typography>
        {/* Right */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "end",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {/* SearchBar */}
            <Box sx={{ flexGrow: 1, minWidth: 200, maxWidth: 200 , height: 40 }}>
              {/*<SearchBar isHeader={false} />*/}
             <SimpleSearchBar />
            </Box>

            {/* Right: Action buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Button size="small" component={Link}  sx={{ fontSize: "10px", color:"darkgreen" }}>
                <Typography variant="caption">Batch Edit</Typography> 
              </Button>
              <Button size="small" sx={{ color: "black" }}>
                Settings
              </Button>
              <Button size="small" sx={{ color: "black" }}>
                Stats
              </Button>
              <Button size="small" sx={{ color: "black" }}>
                Print
              </Button>
              <IconButton
                size="small"
                sx={{ color: "black" }}
                title="Table View"
              >
                <TableRowsIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "black" }}
                title="List View"
              >
                <ViewListIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }}  />
        <Box sx={{ display: "flex",
            overflow: "auto",
            justifyContent: "center",
            gap: 5,
            my: 2,}}>
          {/* Sidebar */}
          <Grid
            sx={{
              minWidth: "200px",
              flexShrink: 0,
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontFamily: "Arial", fontWeight: "bold", fontSize: 14 }}
            >
              Bookshelves
            </Typography>
            <List dense>
              {["All", "Read", "Currently Reading", "Want to Read"].map(
                (shelf) => (
                  <ListItem key={shelf} button>
                    <ListItemText primary={shelf} />
                  </ListItem>
                )
              )}
            </List>
            <Divider sx={{ my: 1 }} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "Arial", fontWeight: "bold", fontSize: 14 }}
            >
              Your reading activity
            </Typography>
            <List dense>
              {[
                "Review Drafts",
                "Kindle Notes & Highlights",
                "Reading Challenge",
                "Year in Books",
                "Reading stats",
              ].map((shelf) => (
                <ListItem key={shelf} button>
                  <ListItemText primary={shelf} />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Main Table*/}
          <Grid sx={{ flexGrow: 1, width: "740px" }}>
           
            <TableComponent books={books} /> 
           
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MyBooks;
