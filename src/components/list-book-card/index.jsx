import React from "react";
import BookCard from "@/components/book-card";
import { useSelector, shallowEqual } from "react-redux";
import equal from "fast-deep-equal";

const ListBookCard = () => {
  /**
   * shallowEqual still causing recreate for array and nested object
   */
  // const books = useSelector((value) => value.book.list, shallowEqual);
  const books = useSelector((value) => value.book.list, equal);

  console.log("[rerender]", "ListBookCard");

  return (
    <div>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </div>
  );
};

export default ListBookCard;
