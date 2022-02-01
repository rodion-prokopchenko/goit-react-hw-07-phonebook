import counterReducer from "./contact-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "../API/contactAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    contacts: counterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
