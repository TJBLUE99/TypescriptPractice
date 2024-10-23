import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: reducer,
  },
});

export default store;
