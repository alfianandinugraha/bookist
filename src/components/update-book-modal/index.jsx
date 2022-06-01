import bookSlice from "@/store/slices/book";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const UpdateBookModal = ({ open = false, onClose = () => {}, book = {} }) => {
  const { register, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      title: book.title,
      author: book.author,
    },
  });
  const dispatch = useDispatch();

  const submit = () => {
    const body = getValues();

    dispatch(
      bookSlice.actions.update({
        id: book.id,
        author: body.author,
        title: body.title,
      })
    );

    reset();
    onClose();
  };

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="textInput">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            {...register("title", {
              required: true,
            })}
          />
        </Form.Group>
        <Form.Group controlId="authorInput">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author"
            {...register("author", {
              required: true,
            })}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit(submit)}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateBookModal;
