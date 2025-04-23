export const FindBookInShelves = (state,id)=>{
    const {shelves} = state.shelves;
      if (shelves.wantToRead.find(b => b.id === id)) {
        return "Want to Read";
      }
       if (shelves.currentlyReading.find(b => b.id === id)) {
        return "Currently Reading";
      }
      if (shelves.read.find(b => b.id === id)) {
              return "Read";
      }
      return null

    };
    