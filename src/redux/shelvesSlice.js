import { createSlice } from "@reduxjs/toolkit";


const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("shelvesState");
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.warn("Error loading shelves from localStorage:", e);
    return null;
  }
};


const initialState =loadFromLocalStorage() || {
  shelves: {
    wantToRead: [],
    currentlyReading: [],
    read: [],
  },
  challenge: {
    goal: 0,      // how many books the user wants to read
    current: 0,   // how many books they've marked as read
  },
};

const shelvesSlice = createSlice({
  name: "shelves",
  initialState,
  reducers: {
    addBookToShelf: (state, action) => {
      const { shelf, book } = action.payload;
      console.log(shelf, book.title)
      book.shelves = shelf;
      if (!state.shelves[shelf].find(b => b.id === book.id)) {
        state.shelves[shelf].push(book);
      }
    },
    
    removeBookFromShelf: (state, action) => {
      const { shelf, bookId } = action.payload;
      console.log(shelf)
      const updated = state.shelves[shelf].filter(b => b.id !== bookId);
      state.shelves[shelf] = [...updated];
    },
    setAllShelves: (state, action) => {
      state.shelves = action.payload;
    },
     
    setChallengeGoal: (state, action) => {
  state.challenge.goal = action.payload;
},
incrementChallengeProgress: (state) => {
  state.challenge.current += 1;
},
resetChallenge: (state) => {
  state.challenge = { goal: 0, current: 0 };
},
  },
  

});

export const { addBookToShelf, removeBookFromShelf, setAllShelves ,setChallengeGoal,incrementChallengeProgress,resetChallenge} = shelvesSlice.actions;
export default shelvesSlice.reducer;


