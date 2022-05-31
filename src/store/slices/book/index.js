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
});

export default bookSlice;
