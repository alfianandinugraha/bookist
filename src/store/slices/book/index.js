import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

/**
 * @typedef Book
 * @property {string} id
 * @property {string} title
 * @property {string} author
 */

/**
 * @typedef BookStore
 * @property {Book[]} list
 */

/**
 * @typedef StoreBookPayload
 * @property {string} title
 * @property {string} author
 */

/**
 * @type {BookStore}
 */
const initialState = {
  list: [
    {
      id: nanoid(),
      title: "Learn the basic redux",
      author: "Robert",
    },
  ],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    /**
     * @param {BookStore} store
     * @param {import("@reduxjs/toolkit").PayloadAction<StoreBookPayload>} action
     */
    store: (store, action) => {
      const newBook = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };

      store.list.unshift(newBook);
    },
  },
});

export default bookSlice;
