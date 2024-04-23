import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance";

export const moviesAction = createAsyncThunk("getMovies", async (num) => {
  const res = await instance.get("/popular", { params: { page: num } });
  return res.data.results;
});


const moviesSlice = createSlice({
  name: "moviesList",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    builder.addCase(moviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  }
});

export default moviesSlice.reducer;