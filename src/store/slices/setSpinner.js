import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "spinner",
  initialState: { spinner: false },
  reducers: {
    setSpinner: (state, action) => {
      state.spinner = action.payload;
    }
  }
});

export const { setSpinner } = loading.actions;
export default loading.reducer;