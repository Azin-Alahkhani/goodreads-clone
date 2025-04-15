import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    if (!book) {
        return null; // or some placeholder
    }
  return (
    <Card>
      <img src={book.cover} alt={book.title} />
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography>{book.author}</Typography>
        <Typography variant="body2">Rating: {book.rating}</Typography>
        <Link to={`/book/${book.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default BookCard;
