import { Typography , Box , Button } from "@mui/material";
import BookHorizontalCard from "./BookHorizontalCard";
import { useEffect, useState } from "react";
import { fetchBookById } from "../utils/FetchBooks";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";



const RecommendationWidget = ({ id="MXj0THxYdkMC"})=>{
const currentBook = "The Way of Kings";
const [book,setBook]=useState({});
const navigate = useNavigate();


      useEffect(() => {
          const loadBook = async () => {
           try {
             const data = await fetchBookById(id);
             setBook(data);
           } catch (error) {
             console.error("Error loading book:", error);
           }
         };
         
            
               loadBook();
         
       }, [id]);



    return (
          <Box sx={{display:"flex", flexDirection:"column"}}>
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: "bold", color: "text.primary",textTransform: "uppercase" }}
      >
        Recommendations
      </Typography>
      <Typography variant="body1">Beacuse youre reading {currentBook} you might also enjoy : </Typography>
      {book &&<Box sx={{ml:1}}> <BookHorizontalCard isBig={false}  book={book}/></Box>}
    {book.description && (
  <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
    <Box
      sx={{
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(book.description),
      }}
    />
    <Button
      onClick={() => navigate(`/book/${book.id}`)}
      variant="text"
      sx={{
        mb: 1,
        p: 0,
        fontSize: "15px",
        justifyContent: "flex-start",
        fontWeight: "bold",
        textAlign: "left",
        color: "text.green",
        ":hover": { textDecoration: "underline", backgroundColor: "inherit" },
      }}
      size="small"
    >
      Continue Reading
    </Button>
  </Box>
)}
<Button
      onClick={() => navigate(`/book/${book.id}`)}
      variant="text"
      sx={{
        mb: 1,
        p: 0,
        fontSize: "15px",
        justifyContent: "flex-start",
        fontWeight: "bold",
        textAlign: "left",
        color: "text.green",
        ":hover": { textDecoration: "underline", backgroundColor: "inherit" },
      }}
      size="small"
    >
      View all books similiar to {currentBook}
    </Button>
      </Box>
    )
}

export default RecommendationWidget