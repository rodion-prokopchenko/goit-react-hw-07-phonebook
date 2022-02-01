import { combineReducers, createReducer } from "@reduxjs/toolkit";
import react from "react";
import {
  addContact,
  deleteContact,
  findByName,
  changeFilter,
} from "./contact-actions";

const items = createReducer([], {
  [deleteContact]: (state, action) =>
    state.filter((contacts) => contacts.id !== action.payload),
  [addContact]: (state, action) => [action.payload, ...state],
  [findByName]: (state, action) => {
    state.filter((state) => state.name.toLowerCase().includes(action.payload));
  },
});

const filter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
