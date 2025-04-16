// utils/fetchBooks.js
export const fetchBooks = async (query) => {
const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(query)}&maxResults=10`); 
 const data = await response.json();
  console.log(query);
  return data.items.map(item => {
    const info = item.volumeInfo;
  
    return {
      id: item.id, 
      title: info.title || "N/A",
      author: (info.authors && info.authors.join(", ")) || "Unknown",
      avgRating: 4,
      myRating: 3, // user input later maybe
      shelves: ["To-read"],
      reviews: info.ratingsCount || 0,
      dateRead: "-",
      dateAdded: new Date().toISOString().split("T")[0],
      cover: info.imageLinks?.thumbnail || "",
    };
  });
};
