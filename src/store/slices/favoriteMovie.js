import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favoriteList",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.splice(action.payload, 1);
    },
  }
});


export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer