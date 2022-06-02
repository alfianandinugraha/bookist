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
 * @typedef DeleteBookPayload
 * @property {string} id
 */

/**
 * @typedef UpdateBookPayload
 * @property {string} id
 * @property {string} title
 * @property {string} author
 */

/**
 * @typedef RefreshBookPayload
 * @property {Book[]} list
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
    /**
     * @param {BookStore} store
     * @param {import('@reduxjs/toolkit').PayloadAction<DeleteBookPayload>} action
     */
    delete: (store, action) => {
      const index = store.list.findIndex(
        (book) => book.id === action.payload.id
      );

      if (index >= 0) store.list.splice(index, 1);
    },
    /**
     * @param {BookStore} store
     * @param {import('@reduxjs/toolkit').PayloadAction<UpdateBookPayload>} action
     */
    update: (store, action) => {
      const index = store.list.findIndex(
        (book) => book.id === action.payload.id
      );

      if (index >= 0) store.list[index] = action.payload;
    },
    /**
     * @param {BookStore} store
     * @param {import('@reduxjs/toolkit').PayloadAction<RefreshBookPayload>} action
     *
     * @description used for trigger rerender with equal or shallowEqual
     */
    refresh: (store) => {
      store.list = [
        {
          id: "eyU8Q_hJNMJgTa6oF09BL",
          title: "Learn the basic redux",
          author: "Robert",
        },
      ];
    },
  },
});

export default bookSlice;
