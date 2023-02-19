import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const manageSlice = createSlice({
  name: "manage",
  initialState: { status: "idle", products: [] }, //chi lu tru cart
  reducers: {
    // handle manger action
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      });
  },
});

export default manageSlice;

export const fetchProducts = createAsyncThunk(
  "manage/fetchProducts",
  async () => {
    // const res = await axios.get("http://localhost:8080/product");
    const res = await axios.get(
      "https://63edb58bd466e0c18ba1c812.mockapi.io/tea-shop"
    );
    return res.data;
  }
);
