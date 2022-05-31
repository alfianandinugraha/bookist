import React from "react";
import { Button, Form } from "react-bootstrap";

const InsertBookForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="textInput">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="authorInput">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter Author" />
      </Form.Group>
      <Button variant="primary" className="w-100">
        Insert Book
      </Button>
    </Form>
  );
};

export default InsertBookForm;
