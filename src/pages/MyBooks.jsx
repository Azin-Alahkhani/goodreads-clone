import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { Link } from "react-router-dom";
import SimpleSearchBar from "../components/SimpleSearchBar.jsx";
import TableComponent from "../components/Table.jsx";
import { useSelector } from "react-redux";
import { CloseOutlined } from "@mui/icons-material";




const MyBooks = () => {

    const toReadBooks = useSelector((state)=>state.shelves.shelves.wantToRead);
    const currentReadBooks =  useSelector((state)=>state.shelves.shelves.currentlyReading)
    const readBooks =  useSelector((state)=>state.shelves.shelves.read);

    const [books, setBooks] = useState((currentReadBooks.concat(toReadBooks)).concat(readBooks))
    
     const [selectedShelf, setSelectedShelf] = useState(null)
    
    //localStorage.clear(); 

    

    const tableCols = [
            { id: "cover", label: "Cover" },
            { id: "title", label: "Title" },
            { id: "author", label: "Author" },
            { id: "avgRating", label: "Avg Rating" },
            { id: "myRating", label: "My Rating" },
            { id: "shelves", label: "Shelves" },
            { id: "reviews", label: "Reviews" },
            { id: "dateRead", label: "Date Read" },
            { id: "dateAdded", label: "Date Added" },
        ];

        const getShelfCount = (shelf)=>{
          const tr = toReadBooks.length;
          const cr = currentReadBooks.length ;
          const re = readBooks.length;
          const all = tr + cr + re;
        switch(shelf){
          case "All" :
            return all;
          case "Want to Read" :
            return tr;
          
          case "Currently Reading" :
            return cr;
          case "Read" :
            return re;
          default :
            return null
          }

        }

        useEffect(()=>{
          if(selectedShelf){
             switch(selectedShelf){
          case "All" :
             setBooks((currentReadBooks.concat(toReadBooks)).concat(readBooks))
             break;
          case "Want to Read" :
            setBooks(toReadBooks);
             break;
          case "Currently Reading" :
            setBooks(currentReadBooks);
             break;
          case "Read" :
             setBooks(readBooks);
             break;
          default :
            break;
          }
          } else setBooks((currentReadBooks.concat(toReadBooks)).concat(readBooks))

        },[selectedShelf])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1440px",
        px: 2,
      }}
    >
      <Box sx={{ width: "70%" }}>
        {/* Top: Title and SearchBar and Buttons */}
        <Box
          sx={{
            display: "flex",
            overflow: "auto",
            alignItems: "center",
            gap: 2,
            my: 0.7,
           
          }}
        >
          {/* Left: Title */}
          <Box sx={{
            display: "flex",
            flexDirection:"row",
            alignItems: "center",
            justifyContent:"flex-start",
            gap: 1,
            my: 0.7,
           
          }}>
            <Typography
            variant="h6"
            sx={{ fontFamily: "Merriweather", justifySelf: "start", fontSize:20, fontWeight:"800" , color:"text.green"}}
          >
            My Books
          </Typography>
          {/* Conditionally render ribbon next to title */}
          {selectedShelf && selectedShelf!=="All" && (
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}>
              <Box
              sx={{
                backgroundColor: "goodreads.brown",
                alignItems:"center",
                color: "primary.main",
                padding: "0.5rem 0.5rem",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                marginLeft: 2,
                //width:"80px",
                fontWeight: "bold",
              }}
            >
            {selectedShelf} ({getShelfCount(selectedShelf)})
            </Box>
            <Button 
            onClick={()=>setSelectedShelf(null)}
            sx={{
                backgroundColor: "goodreads.brown2",
                alignItems:"center",
                color: "text.secondary",
                padding: "6px 6px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",                
                maxWidth:"13px",
                minWidth:"13px",

                //fontWeight: "bold",
              }}
            ><CloseOutlined /></Button>
            </Box>
          )}
          </Box>
        {/* Right */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "end",
              alignItems: "center",
              flexGrow: 1,
              mx:1,
              my:0.7,
              
            }}
          >
            {/* SearchBar */}
            <Box sx={{ flexGrow: 1, minWidth: 200, maxWidth:250, height: 25 }}>
              {/*<SearchBar isHeader={false} />*/}
             <SimpleSearchBar isMyBooks={true} />
            </Box>

            {/* Right: Action buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 0,
              }}
            >
              <Button size="small" component={Link}  sx={{fontSize: "10px", color:"black", ":hover":{backgroundColor:"inherit"} }} to={`/add-book`}>
                <Typography variant="caption">Batch Edit</Typography> 
              </Button>
              <Button size="small" sx={{ color: "black", ":hover":{backgroundColor:"inherit"}}}>
                Settings
              </Button>
              <Button size="small" sx={{ color: "black", ":hover":{backgroundColor:"inherit"} }}>
                Stats
              </Button>
              <Button size="small" sx={{ color: "black" , textDecoration:"none", ":hover":{backgroundColor:"inherit"} }}>
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
        <Divider sx={{ my: 0.5 }}  />
        <Box sx={{ display: "flex",
            overflow: "auto",
            justifyContent: "center",
            gap: 5,
            my: 1,}}>
          {/* Sidebar */}
          <Grid
            sx={{
              minWidth: "200px",
              flexShrink: 0,
            }}
          >
           <Box sx={{display:"flex",flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
             <Typography
              variant="body1"
              gutterBottom
              sx={{ fontFamily: "Helvetica", fontWeight: "bold", fontSize: 14 }}
            >
              Bookshelves 
                          </Typography>
                          <Button variant="text" sx={{color:"text.green",ml:0, ":hover":{color:"inherit", textDecoration:"underline"}}}>(edit)</Button>

           </Box>
            <Box>
              {["All", "Read", "Currently Reading", "Want to Read"].map(
                (shelf) => (
                  <Button onClick={()=>setSelectedShelf(shelf)} variant="text" key={shelf} sx={{display:"flex", flexDirection:"column", alignItems:"flex-start"}} >
                  {shelf} ({getShelfCount(shelf)})
                  </Button>
                )
              )}
            </Box>
            <Divider sx={{ my: 1 }} />
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "Helvetica", fontWeight: "bold", fontSize: 14 }}
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
           
            <TableComponent books={books} cols={tableCols} /> 
           
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MyBooks;
