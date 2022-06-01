import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import DeleteBookModal from "../delete-book-modal";

/**
 * @typedef BookCardProps
 * @property {string} title
 */

const BookCard = ({
  title = "",
  author = "",
  onClickDelete = (id) => {},
  id = "",
}) => {
  const [isModalDeleteShow, setIsModalDeleteShow] = useState(false);

  return (
    <>
      <DeleteBookModal
        id={id}
        open={isModalDeleteShow}
        onClose={() => setIsModalDeleteShow(false)}
      />
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text
            className="fst-italic"
            style={{
              color: "#B1B1B1",
            }}
          >
            {author}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex">
          <Button
            variant="danger"
            className="ms-auto"
            onClick={() => setIsModalDeleteShow(true)}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            className="ms-2"
            onClick={() => onClickDelete(id)}
          >
            Update
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BookCard;
