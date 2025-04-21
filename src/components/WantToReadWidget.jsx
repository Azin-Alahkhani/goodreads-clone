import { Box, Typography, InputBase, Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import toReadImg from "../assets/toRead.svg"
import SimpleSearchBar from "./SimpleSearchBar";
import SearchBar from "./SearchBar";

const WantToReadWidget = ({ books = []}) => {
  const hasBooks = books.length > 0;
  const firstBook = books[0];

  return (
    <Box
    >
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: "bold", color: "text.primary",textTransform: "uppercase" }}
      >
        want to read
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
          <Button sx={{width:"120px", height:"20px", backgroundColor:"inherit", borderColor:"text.primary" ,":hover":{bgcolor:"text.primary", color:"white"}}} variant="outlined" color="text.primary">Update progress</Button>
        
          </Box>
       
          </Box>
          {/*bottom buttons */}
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                          <Button variant="text" sx={{color:"text.green",fontSize:"14px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>View all book</Button>
<strong>.</strong>
            <Button variant="text" sx={{color:"text.green",fontSize:"14px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>Add a book</Button>
           <strong>.</strong> <Button variant="text" sx={{color:"text.green",fontSize:"14px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>General update</Button>
          </Box>
          
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box component="img" src={toReadImg} sx={{
              width: 49,
              height: 68,
              objectFit: "cover",
            }} />
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ fontSize: "15px", ml:1 }}
            >
              What do you want to read next?
            </Typography>
          </Box>

         
          <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start", width:"100%"}}>
            <Button variant="text" sx={{color:"text.green",fontSize:"14px",":hover":{textTransform:"none", backgroundColor:"inherit"}}}>Recommendations</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WantToReadWidget;
