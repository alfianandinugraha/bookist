import React from "react";
import BookCard from "@/components/book-card";

const ListBookCard = () => {
  return (
    <div>
      <BookCard
        id="1"
        title="Learn the basic redux"
        author="Robert"
        onClickDelete={() => {}}
        onClickUpdate={() => {}}
      />
    </div>
  );
};

export default ListBookCard;
