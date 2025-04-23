import { Box, Typography, InputBase, Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import CurrentReadPlaceholderImg from "../assets/currentReadPic.svg"
import SimpleSearchBar from "./SimpleSearchBar";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const CurrentlyReadingWidget = ({ setGlobalSearchTerm }) => {
  const books = useSelector((state)=>state.shelves.shelves.currentlyReading)
  const hasBooks = books.length > 0;
  const firstBook = books[0];

  return (
    <Box
    >
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: "bold", color: "text.primary",textTransform: "uppercase" }}
      >
        Currently Reading
      </Typography>

      {hasBooks ? (
<Box sx={{display:"flex", flexDirection:"column"}}> 
        <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
          <Box
            component="img"
            src={firstBook.cover || "/placeholder.jpg"}
            alt={firstBook.title}
            sx={{
              width: 95,
              height: 142,
              objectFit: "cover",
              borderRadius: 0.5,
              boxShadow: 1,
            }}
          />
          <Box>
            <Link
            to={`/book/${firstBook.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {firstBook.title}
          </Link> <Typography fontSize="13px" fontWeight="bold">by {firstBook.author}</Typography> 
          <Button sx={{width:"123px", height:"20px", backgroundColor:"inherit", borderColor:"text.primary" ,":hover":{bgcolor:"text.primary", color:"white"}}} variant="outlined" color="text.primary">Update progress</Button>
        
          </Box>
       
          </Box>
          {/*bottom buttons */}
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                          <Button variant="text" sx={{color:"text.green",fontSize:"13px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>View all books</Button>
<strong>.</strong>
            <Button variant="text" sx={{color:"text.green",fontSize:"13px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>Add a book</Button>
           <strong>.</strong> <Button variant="text" sx={{color:"text.green",fontSize:"13px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>General update</Button>
          </Box>
          
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box component="img" src={CurrentReadPlaceholderImg} sx={{
              width: 49,
              height: 68,
              objectFit: "cover",
            }} />
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ fontSize: "14px" }}
            >
              What are you reading?
            </Typography>
          </Box>

          <SearchBar setGlobalSearchTerm={setGlobalSearchTerm}  />
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <Button variant="text" sx={{color:"text.green",fontSize:"14px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>Recommendations</Button>
            <Button variant="text" sx={{color:"text.green",fontSize:"14px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>General update</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CurrentlyReadingWidget;
