// shelvesSelector.js
export const FindBookInShelves = (state, bookId) => {
  const shelfData = state.shelves?.shelves;
  if (!shelfData) return null;

  if (shelfData.wantToRead?.some((b) => b.id === bookId)) {
    return "Want to Read";
  }
  if (shelfData.currentlyReading?.some((b) => b.id === bookId)) {
    return "Currently Reading";
  }
  if (shelfData.read?.some((b) => b.id === bookId)) {
    return "Read";
  }

  return null;
};
