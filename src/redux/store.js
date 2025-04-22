// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import shelvesReducer from "./shelvesSlice";

const saveToLocalStorage = (state) => {
  try {
    const serialized = JSON.stringify(state.shelves);
    localStorage.setItem("shelvesState", serialized);
  } catch (e) {
    console.warn("Error saving shelves to localStorage:", e);
  }
};

const store = configureStore({
  reducer: {
    shelves: shelvesReducer,
  },
});

// Subscribe once to persist shelves on every state change
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
