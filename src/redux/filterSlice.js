// cac hoat dong loc cua user
import { createSlice } from "@reduxjs/toolkit";

const filterSilce = createSlice({
  name: "filter",
  initialState: {
    category: "All",
    name: "",
  },
  reducers: {
    byCategory: (state, action) => {
      state.category = action.payload;
    },
    byName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default filterSilce;
