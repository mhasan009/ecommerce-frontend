import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

/* ==============================
   Fetch All Products
================================ */
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(API_URL);

    return response.data.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
    }));
  },
);

/* ==============================
   Fetch Single Product
================================ */
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);

    const item = response.data;

    return {
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
    };
  },
);

/* ==============================
   Slice
================================ */
const productSlice = createSlice({
  name: "product",

  initialState: {
    products: [],
    selectedProduct: null,
    searchTerm: "",
    loading: false,
    error: null,
  },

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },

  extraReducers: (builder) => {
    builder

      /* Fetch Products */
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* Fetch Single Product */
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })

      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

/* ==============================
   Exports
================================ */
export const { setSearchTerm, clearSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
