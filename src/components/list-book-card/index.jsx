import React from "react";
import BookCard from "@/components/book-card";
import { shallowEqual, useSelector } from "react-redux";

const ListBookCard = () => {
  const books = useSelector((value) => value.book.list, shallowEqual);

  return (
    <div>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            onClickDelete={() => {}}
            onClickUpdate={() => {}}
          />
        );
      })}
    </div>
  );
};

export default ListBookCard;
