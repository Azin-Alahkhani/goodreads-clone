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




const MyBooks = () => {

    const [books, setBooks] = useState([]);

useEffect(() => {
  fetchBooks("lord of").then(setBooks);
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
            <Box sx={{ flexGrow: 1, minWidth: 200, maxWidth: 200 , height: 20 }}>
              {/*<SearchBar isHeader={false} />*/}
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
                      height: "90%",
                    }}
                  >
                     <SearchIcon sx={{ color: "gray" }} />
                      <InputBase
                               placeholder="Search books..."
                               sx={{ ml: 1, flex: 1 }}
                               inputProps={{ "aria-label": "search books" }}
                             />
                  </Box>
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
            <TableContainer
              component={Paper}
              x={{
                minWidth: 740,
                borderCollapse: "separate",
                borderSpacing: 0,
                "& td, & th": {
                  borderBottom: "1px solid #ddd",
                  borderRight: "none",
                  borderLeft: "none",
                },
                "& thead tr": {
                  backgroundColor: "transparent",
                },
                "& tbody tr:last-child td": {
                  borderBottom: "none",
                },
              }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell variant="head">
                      <Typography variant="caption">Cover</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Title</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Author</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Avg Rating</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">My Rating</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Shelves</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Reviews</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Date Read</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">Date Added</Typography>
                    </TableCell>
                    {/* <TableCell><Typography variant="caption">Actions</Typography></TableCell> */}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {books.map((book, index) => (
                    <TableRow
                      key={index}
                      sx={{ borderBottom: "1px solid #ddd" }}
                    >
                      <TableCell>
                        {book.cover ? <img
                          src={book.cover}
                          alt="img"
                          style={{ width: "50px", height: "auto" }}
                        /> : null}
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">{book.title}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">{book.author}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {"★".repeat(book.avgRating)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {"★".repeat(book.myRating)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.shelves.join(", ")}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.reviews}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.dateRead}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {book.dateAdded}
                        </Typography>
                      </TableCell>
                       <TableCell>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
              </Box>
            </TableCell> 
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MyBooks;
