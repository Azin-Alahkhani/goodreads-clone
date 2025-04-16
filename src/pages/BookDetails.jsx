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
            {book.avgRating || "—"} · {book.ratingsCount || 4} ratings
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {book.description || "No description available."}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2">
          <strong>Publisher:</strong> {book.publisher || "Unknown"}
        </Typography>
        <Typography variant="body2">
          <strong>Published:</strong> {book.publishedDate || "N/A"}
        </Typography>
        <Typography variant="body2">
          <strong>Pages:</strong> {book.pageCount || "N/A"}
        </Typography>

        {book.previewLink && (
          <Button
            href={book.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
            variant="outlined"
          >
            Preview on Google Books
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BookDetails;
