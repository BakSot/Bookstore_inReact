import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
