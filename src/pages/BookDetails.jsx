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
  IconButton,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { useRef } from "react";
import DOMPurify from "dompurify";
import { fetchBookById } from "../utils/FetchBooks.js"; // Adjust the import path as necessary
import Avatar from "boring-avatars";
import ShelfButton from "../components/ShelfButton.jsx";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

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
    <Box sx={{ p: 1, maxWidth: "1000px", margin: 2, display: "flex", gap: 4 }}>
      {/* Left: Cover */}
      <Box sx={{ flexShrink: 0 , display: "flex", flexDirection: "column", alignItems: "center" }}>
        {book.cover ? <img
          src={book.cover}
          alt={"cover"}
          style={{ width: 210, borderRadius: 8 }}
        /> :" null"}
       <Box mt={2} display="flex" gap={1} flexWrap="wrap" width={"200px"} justifyContent="center">
       <ShelfButton bookdetail={true} />
        </Box>
      </Box>

      {/* Right: Info */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" , gap: 1 }}>
        <Typography variant="h3" sx={{fontFamily:"Nimbus Sans Novus"}}>{book.title}</Typography>
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
          <Typography variant="h3" color="text.primary"  fontFamily={"fNimbus Sans Novus"}>
             <strong>{book.avgRating || "—"} </strong>
             </Typography>
          <Typography variant="body2">
           · {book.ratingsCount || 143} ratings . {book.reviews} reviews
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        
        <ExpandableText
        text={book.description || "No description available."}
        lines={3} 
        variant="body1"
      />
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
            //backgroundColor: "#f1f1f1",
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
<Box sx={{ mt: 3, overflow: "hidden", position: "relative" }}>
  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
    Readers Also Enjoyed
  </Typography>

  {/* Book Cards Container */}
  <Box
    ref={scrollRef}
    sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          flexWrap: "nowrap",
          scrollBehavior: "smooth",
          p: 2,
          '&::-webkit-scrollbar': { display: 'none' }, // optional
          width: "100%", // crucial!
        }}
  >
    {[...Array(5)].map((_, index) => (
      <Box
        key={index}
        sx={{
          flex: "0 0 auto", // Prevent shrinking/wrapping
          width: 120,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 180,
            borderRadius: 2,
            boxShadow: 1,
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 4,
            },
          }}
        >
          <img
            src={book.cover}
            alt={`Book ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
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
            ★ 4.3
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>

  {/* Scroll Button */}
  <IconButton
    sx={{
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      backgroundColor: "white",
      boxShadow: 2,
      zIndex: 1,
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    }}
    onClick={() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300;
      }
    }}
  >
    <ChevronRight />
  </IconButton>
</Box>


<Divider sx={{ my: 2 }} />

{/* My Rating & Review Section */}
<Box sx={{ mt: 1 }}>
  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
    My Rating & Review
  </Typography>
  
  <Box sx={{ display: "flex", gap: 2, mt:2,flexDirection: "row", justifyContent:"between" , alignItems: 'flex-start' }}>
    {/* profile Image */}
   <Box sx={{ display: "flex", alignItems: "center" , justifyContent:"space-between" , width:"20%", mt:2 }}>
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
      <Avatar name={"sima farahani"} variant="beam" />
      
    </Box>
      <Box sx={{display:"flex", flexDirection:"column" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Your Name
        </Typography>
        <Typography variant="caption" color="text.secondary">
          3 Reviews
        </Typography>
      </Box>
      </Box>
   
   </Box>
    
    {/* My Review */}
    <Box sx={{ width:"85%" , display:"flex", flexDirection:"column", mt:3, gap:2}} >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 , justifyContent:"space-between" }}>
      <Rating
        name="user-rating"
        value={book.myRating}
        precision={0.5}
        />
        <Typography variant="body2" color="text.secondary">
         October 17, 2018
        </Typography>
        </Box>
        <ExpandableText
        text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis felis in felis ultricies, id tincidunt odio gravida. Sed utvelit vitae arcu posuere tincidunt eget ut mauris. Integer sollicitud in turpis eu nisi varius, sit amet tristique justo dictum. Phasellus egetleo at magna aliquam ultricies sit amet et odio. Pellentesque vitae erat vel nunc fermentum sodales."
        lines={3} // Number of lines to show before truncating
      />
     
      
    </Box>
  </Box>
</Box>

       
      </Box>
    </Box>
  );
};

export default BookDetails;



const ExpandableText = ({ text = "", lines = 5}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);
  const shouldTruncate = text.length > 300;

  const cleanHTML = DOMPurify.sanitize(text);

  return (
    <Box>
      <Box
        sx={{
          color: "text.primary",
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "none" : lines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "pre-line",
        }}
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />
      {shouldTruncate && (
        <Button
          onClick={toggleExpanded}
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
          {expanded ? "Show less" : "Show more"}
        </Button>
      )}
    </Box>
  );
};
