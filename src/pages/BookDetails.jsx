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

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await res.json();
        setBook(data.volumeInfo);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  if (!book) return <Typography sx={{ m: 4 }}>Book not found.</Typography>;

  return (
    <Box sx={{ p: 4, maxWidth: 1000, margin: "auto", display: "flex", gap: 4 }}>
      {/* Left: Cover */}
      <Box sx={{ flexShrink: 0 }}>
        <img
          src={book.imageLinks?.thumbnail || ""}
          alt={book.title}
          style={{ width: 200, borderRadius: 8 }}
        />
        <Box mt={2} display="flex" gap={1} flexWrap="wrap">
          <Chip label="Want to Read" />
          <Chip label="Currently Reading" />
          <Chip label="Read" />
        </Box>
      </Box>

      {/* Right: Info */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4">{book.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {book.authors?.join(", ") || "Unknown Author"}
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Rating
            value={book.averageRating || 0}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2">
            {book.averageRating || "—"} · {book.ratingsCount || 0} ratings
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
