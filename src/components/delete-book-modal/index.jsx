import bookSlice from "@/store/slices/book";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

const DeleteBookModal = ({ open = false, onClose = () => {}, id = null }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(
      bookSlice.actions.delete({
        id: id,
      })
    );
    onClose();
  };

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete book</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button variant="danger" onClick={deleteHandler}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBookModal;
