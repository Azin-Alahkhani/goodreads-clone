import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Rating,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import { fetchBookById } from "../utils/FetchBooks.js"; // Adjust the import path as necessary
import Avatar from "boring-avatars";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const loadBook = async () => {
      try {
        const data = await fetchBookById(id);
        setBook(data);
      } catch (error) {
        console.error("Error loading book:", error);
      } finally {
        setLoading(false);
      }
    };
    
       
          loadBook();
    
  }, [id]);
  useEffect(() => {
    if(book) console.log(book);
  },[book]);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  if (!book) return <Typography sx={{ m: 4 }}>Book not found.</Typography>;

  return (
    <Box sx={{ p: 1, maxWidth: 1000, margin: 2, display: "flex", gap: 4 }}>
      {/* Left: Cover */}
      <Box sx={{ flexShrink: 0 , display: "flex", flexDirection: "column", alignItems: "center" }}>
        {book.cover ? <img
          src={book.cover}
          alt={book.title}
          style={{ width: 210, borderRadius: 8 }}
        /> :" null"}
       <Box mt={2} display="flex" gap={1} flexWrap="wrap">
          <Chip label="Want to Read" />
          <Chip label="Currently Reading" />
          <Chip label="Read" />
        </Box>
      </Box>

      {/* Right: Info */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" , gap: 1 }}>
        <Typography variant="h3" sx={{fontFamily:"sans-serif"}}>{book.title}</Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {book.author || "Unknown Author"}
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Rating
            value={book.avgRating || 0}
            precision={0.5}
            readOnly
           size="large"
          />
          <Typography variant="body2">
            {book.avgRating || "—"} · {book.ratingsCount || 4} ratings . {book.reviews} reviews
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {book.description || "No description available."}
        </Typography>
          {book.categories && (
  <Box sx={{ mt: 2 }}>
    <Typography variant="subtitle2" color="text.secondary">
      Genres:
    </Typography>
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {book.categories.map((category, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#f1f1f1",
            px: 1,
            py: 0.5,
            borderRadius: "8px",
            fontSize: "0.85rem",
          }}
        >
          {category}
        </Box>
      ))}
    </Box>
  </Box>
)}

     <Box sx={{mt: 2 , display:"flex", flexDirection:"column", gap:1}}>

        <Typography variant="caption" color="text.secondary">
          <strong>Publisher:</strong> {book.publisher || "Unknown"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          <strong>First Published:</strong> {book.publishedDate || "N/A"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          <strong>Pages:</strong> {book.pageCount || "N/A"}
        </Typography>
</Box>
<Divider sx={{ my: 2 }} />

{/* Readers Section */}
<Box sx={{ display: "flex", gap: 1, mx:2, width: "100%", justifyContent:"space-between"}}>
<Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
  {[1, 2, 3].map((i) => (
    <Box
      key={i}
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid white",
        ml: i === 0 ? 0 : -1.5, // overlap them
        zIndex: 3 - i, // stack order
      }}
    >
      <Avatar
        size={32}
        name={`reader${i}`}
        variant="beam"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
    </Box>
  ))}
  <Typography variant="body2" color="text.primary">
      <strong>6,557</strong> people are currently reading
    </Typography>
</Box>

<Box sx={{ display: "flex", alignItems: "center",  mt: 1 , mr:2 }}>
  {[1, 2, 3].map((i) => (
    <Box
      key={i}
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid white",
        ml: i === 0 ? 0 : -1.5, // overlap them
        zIndex: 3 - i, // stack order
      }}
    >
      <Avatar
        size={32}
        name={`mn azin${i+8}`}
        variant="beam"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
    </Box>
  ))}
  <Typography variant="body2" color="text.primary">
      🌟 <strong>75,000</strong> want to read
    </Typography>
</Box>

  </Box>
<Divider sx={{ my: 2 }} />
{/* About the Author */}
<Box sx={{ mt: 1 }}>
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    About the Author
  </Typography>
  
  <Box sx={{ display: "flex", mt: 2, gap: 2, flexDirection: "column" }}>
    {/* Author Image */}
   <Box sx={{ display: "flex", alignItems: "center" , justifyContent:"space-between" , width:"100%" }}>
     <Box sx={{ display: "flex", alignItems: "center" , justifyContent:"start"}}>
      <Box
      sx={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        overflow: "hidden",
        mr: 2,
        backgroundColor: "#ddd",
      }}
    >
      <Avatar name={book.author} variant="beam" />
      
    </Box>
      <Box sx={{display:"flex", flexDirection:"column"}}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {book.author || "Unknown Author"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          74 books | 1,239 followers
        </Typography>
      </Box>
      </Box>
    <Button variant="contained" sx={{ borderRadius: 5 , backgroundColor:"black" }}>
      Follow
    </Button>
   </Box>
    
    {/* Author Bio */}
    <Box sx={{ flex: 1 }}>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        venenatis felis in felis ultricies, id tincidunt odio gravida. Sed ut
        velit vitae arcu posuere tincidunt eget ut mauris. Integer sollicitudin
        turpis eu nisi varius, sit amet tristique justo dictum. Phasellus eget
        leo at magna aliquam ultricies sit amet et odio. Pellentesque vitae
        erat vel nunc fermentum sodales.
      </Typography>
      
    </Box>
  </Box>
</Box>
<Divider sx={{ my: 2 }} />

{/* Readers Also Enjoyed Section */}
<Box sx={{ mt: 3 }}>
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    Readers Also Enjoyed
  </Typography>

  {/* Book Cards Container */}
  <Box sx={{ display: "flex", mt: 2, gap: 2, overflowX: "auto" }}>
    {/* Repeat this Card for each similar book */}
    {[...Array(5)].map((_, index) => (
      <Box>
      <Box
        key={index}
        sx={{
          width: 120,
         // height: 220,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: 1,
          overflow: "hidden",
          transition: "transform 0.3s ease",
          "&:hover img": {
            transform: "scale(1.05)", // Only the image comes forward on hover
            boxShadow: 3, // Increase shadow on hover
          },
        }}
      >
        {/* Book Image */}
        <img
          src={book.cover} // Replace with actual book cover
          alt={`Book ${index + 1}`}
          style={{
            width: "100%",
             // Fixed height for the image
            objectFit: "cover",
            transition: "transform 0.3s ease", // Smooth transition for the image
          }}
        />
        
        {/* Book Info (Title, Author, Rating) */}
        
      </Box>
      <Box sx={{ p: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              color: "text.primary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Book Title {index + 1}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.secondary",
              fontSize: "0.75rem",
              marginBottom: "4px",
            }}
          >
            Author Name {index + 1}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.primary",
              fontSize: "0.75rem",
            }}
          >
            ★ 4.3 {/* Dummy rating, replace with actual data */}
          </Typography>
        </Box>
        </Box>
    ))}
  </Box>
</Box>





        {/*{book.previewLink && (
          <Button
            href={book.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
            variant="outlined"
          >
            Preview on Google Books
          </Button>
        )}*/}
      </Box>
    </Box>
  );
};

export default BookDetails;
