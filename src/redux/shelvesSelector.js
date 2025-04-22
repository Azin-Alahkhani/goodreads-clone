export const FindBookInShelves = (state,id)=>{
    const {shelves} = state.shelves;
      if (shelves.wantToRead.find(b => b.id === id)) {
        return "Want to read";
      }
       if (shelves.currentlyReading.find(b => b.id === id)) {
        return "Currently reading";
      }
      if (shelves.read.find(b => b.id === id)) {
              return "Read";
      }
      return null

    };
    