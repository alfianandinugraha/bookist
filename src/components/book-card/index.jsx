import React from "react";
import { Button, Card } from "react-bootstrap";

const BookCard = ({
  title = "",
  author = "",
  onClickDelete = (id) => {},
  onClickUpdate = (id) => {},
  id = "",
}) => {
  return (
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
          onClick={() => onClickUpdate(id)}
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
  );
};

export default BookCard;
