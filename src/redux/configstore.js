import { configureStore } from "@reduxjs/toolkit";


import ImageSlice from "./modules/ImageSlice";

const store = configureStore({
  reducer: {
    ImageSlice,
  },
});


export default store;