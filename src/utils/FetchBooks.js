// utils/fetchBooks.js
export const fetchBooks = async (query) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10`);
  const data = await response.json();

  return data.items.map(item => {
    const info = item.volumeInfo;
    return {
      title: info.title || "N/A",
      author: (info.authors && info.authors.join(", ")) || "Unknown",
      avgRating: info.averageRating || "—",
      myRating: null, // user input later maybe
      shelves: ["To-read"],
      reviews: info.ratingsCount || 0,
      dateRead: "-",
      dateAdded: new Date().toISOString().split("T")[0],
      cover: info.imageLinks?.thumbnail || "",
    };
  });
};
