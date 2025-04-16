import { useState } from 'react';
import {
  Container, Box, Tabs, Tab, TextField, Typography,
  IconButton, Checkbox, Grid, Card, CardContent, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, Button
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

const dummyBooks = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Book Title ${i + 1}`,
  author: `Author ${i + 1}`,
  cover: `https://via.placeholder.com/100x150?text=Book+${i + 1}`,
}));

export default function MyBooksPage() {
  const [viewMode, setViewMode] = useState('table');
  const [search, setSearch] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);

  const filteredBooks = dummyBooks.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id) => {
    setSelectedBooks((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  return (
    <Container >
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={2}>
        <Typography variant="h4">My Books</Typography>
        <Box>
          <IconButton onClick={() => setViewMode('table')}>
            <ViewListIcon color={viewMode === 'table' ? 'primary' : 'default'} />
          </IconButton>
          <IconButton onClick={() => setViewMode('cover')}>
            <ViewModuleIcon color={viewMode === 'cover' ? 'primary' : 'default'} />
          </IconButton>
        </Box>
      </Box>

      <TextField
        fullWidth
        label="Search Books"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        margin="normal"
      />

      {selectedBooks.length > 0 && (
        <Box my={2}>
          <Typography variant="body1">{selectedBooks.length} selected</Typography>
          <Button variant="outlined" color="secondary">Batch Edit</Button>
        </Box>
      )}

      {viewMode === 'table' ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" />
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBooks.map(book => (
                <TableRow key={book.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedBooks.includes(book.id)}
                      onChange={() => toggleSelect(book.id)}
                    />
                  </TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Grid container spacing={2} mt={2}>
          {filteredBooks.map(book => (
            <Grid item xs={6} sm={4} md={3} key={book.id}>
              <Card>
                <Checkbox
                  checked={selectedBooks.includes(book.id)}
                  onChange={() => toggleSelect(book.id)}
                  sx={{ position: 'absolute', zIndex: 2 }}
                />
                <img src={book.cover} alt={book.title} style={{ width: '100%' }} />
                <CardContent>
                  <Typography variant="subtitle1">{book.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
