import { useParams } from 'react-router-dom';
import books from '../data/books.json';

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  return book ? (
    <div>
      <h2>{book.title}</h2>
      <img src={book.cover} alt={book.title} />
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      {/* Add more details like description, reviews, etc. */}
    </div>
  ) : (
    <p>Book not found</p>
  );
}

export default BookDetails;
