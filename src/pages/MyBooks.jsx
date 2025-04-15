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
   Button, IconButton,
   Divider,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import TableRowsIcon from "@mui/icons-material/TableRows";
import SearchBar from "../components/SearchBar"; // adjust path

const dummyBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 4,
    shelves: ["Fantasy", "Favorites"],
    dateRead: "2023-02-15",
    dateAdded: "2023-03-10",
    cover: "../assets/IMG_5561.JPG",
    myRating: 3,
    Reviews: "A timeless clas...",

  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4,
    shelves: ["Dystopia"],
    dateRead: "2022-11-10",
    dateAdded: "2023-03-10",
    cover: "../assets/IMG_5561.JPG",
    myRating: 3,
    Reviews: "A timeless clas...",

  },
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    rating: 5,
    shelves: ["Tech", "To Reread"],
    dateRead: "2023-06-01",
    dateAdded: "2023-03-10",
    cover: "https://example.com/hobbit.jpg",
    myRating: 3,
    Reviews: "A timeless clas...",

  },
];

const MyBooks = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" ,flexWrap: "wrap", width: "100%", maxWidth: "1200px", px: 2  }}>
  <Box sx={{ width: "100%", maxWidth: "1200px", px: 2 }}>
        <Box
        sx={{
        display: "flex",
        flexWrap: "wrap",
       // justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        my: 2,
  }}
>
  {/* Left: Title (again, optional redundancy) */}
  <Typography variant="h6" sx={{ fontFamily: "Arial" }}>
    My Books
  </Typography>

  {/* Center: SearchBar */}
  <Box sx={{ flexGrow: 1, minWidth: 300, maxWidth: 400 }}>
    <SearchBar />
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
    <Button size="small" sx={{color:"black", fontSize:"10px"}}>Batch Edit</Button>
    <Button size="small" sx={{color:"black"}}>Settings</Button>
    <Button size="small" sx={{color:"black"}}>Stats</Button>
    <Button size="small" sx={{color:"black"}}>Print</Button>
    <IconButton size="small" sx={{color:"black"}} title="Table View">
      <TableRowsIcon />
    </IconButton>
    <IconButton size="small" sx={{color:"black"}} title="List View">
      <ViewListIcon />
    </IconButton>
  </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: "Arial", fontWeight: "bold" , fontSize: 14 }}>
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
          <Typography variant="h6" gutterBottom sx={{ fontFamily: "Arial", fontWeight: "bold" , fontSize: 14 }}>
            Your reading activity
          </Typography>
          <List dense>
            {["Review Drafts",
"Kindle Notes & Highlights",
"Reading Challenge"
,"Year in Books",
"Reading stats"].map(
              (shelf) => (
                <ListItem key={shelf} button>
                  <ListItemText primary={shelf} />
                </ListItem>
              )
            )}
          </List>
        </Grid>

        {/* Main Table*/}
        <Grid item xs={12} md={9}>
  <Box sx={{ border: "none", width: "100%", boxShadow: 1 }}>
    <Grid container spacing={2} sx={{ backgroundColor: "#f5f1e9", padding: 1 }}>
   
      <Grid item xs={1}>
        <Typography variant="body2">Cover</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2">Title</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2">Author</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2">Avg Rating</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2">My Rating</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body2">Shelves</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2">Reviews</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2">Date Read</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2">Date Added</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2">Actions</Typography>
      </Grid>
    </Grid>

   
    {dummyBooks.map((book, index) => (
      <Grid container spacing={2} key={index} sx={{ padding: 1, borderBottom: "1px solid #ddd" }}>
        <Grid item xs={1}>
          <img src={book.cover} alt={book.title} style={{ width: "50px", height: "auto" }} />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">{book.title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">{book.author}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">{"★".repeat(book.rating)}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">{"★".repeat(book.myRating)}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2">{book.shelves.join(", ")}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">{book.reviews}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">{book.dateRead}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">{book.dateAdded}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </Box>
        </Grid>
      </Grid>
    ))}
  </Box>
        </Grid> 

      </Grid>
   </Box>
    </Box>
  );
};

export default MyBooks;
