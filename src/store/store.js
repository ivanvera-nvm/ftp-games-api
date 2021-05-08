import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import gamesReducer from "./games";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    games: gamesReducer,
  },
});

export default store;
