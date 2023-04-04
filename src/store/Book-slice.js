import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://books-store-app.glitch.me";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${BASE_URL}/books`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${BASE_URL}/books`, {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: { books: [], isLoading: false, error: null },
  extraReducers: {
    //Get Books
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Add Book
    [addBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.books.push(action.payload);
      state.books = [...state.books, action.payload];
    },
    [addBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
