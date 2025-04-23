// utils/fetchBooks.js
export const fetchBooks = async ({query, maxR=10}) => {
const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(query)}&maxResults=${maxR}`); 
 const data = await response.json();

  return data.items.map(item => {
    const info = item.volumeInfo;
  
    return {
      id: item.id, 
      title: info.title || "N/A",
      author: (info.authors && info.authors.join(", ")) || "Unknown",
      avgRating: 3.5,
      myRating: 3, // user input later maybe
      shelves: "",
      reviews: info.ratingsCount || 0,
      dateRead: "-",
      dateAdded: new Date().toISOString().split("T")[0],
      cover: info.imageLinks?.thumbnail || "",
      description: info.description || "",
       publisher: info.publisher || "Unknown",
    publishedDate: info.publishedDate || "N/A",
    pageCount: info.pageCount || "N/A",
    previewLink: info.previewLink || "",
    categories: info.categories || [],
    
    };
  });
};

export const fetchBookById = async (id) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const data = await response.json();
  const info = data.volumeInfo;
  const cover =
    info.imageLinks?.thumbnail ||
    info.imageLinks?.smallThumbnail ||
    "";

  return {
    id: data.id,
    title: info.title || "N/A",
    author: (info.authors && info.authors.join(", ")) || "Unknown",
    avgRating:  3.5,
    myRating: 3,
    shelves: "",
    reviews: info.ratingsCount || 0,
    dateRead: "-",
    dateAdded: new Date().toISOString().split("T")[0],
    cover: cover,
    // extra props if needed later
    description: info.description || "",
    publisher: info.publisher || "Unknown",
    publishedDate: info.publishedDate || "N/A",
    pageCount: info.pageCount || "N/A",
    previewLink: info.previewLink || "",
    categories: info.categories || [],
  };
};
