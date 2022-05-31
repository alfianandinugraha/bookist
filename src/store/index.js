import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "@/store/slices/book";

const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});

export default store;
