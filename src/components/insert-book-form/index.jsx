import bookSlice from "@/store/slices/book";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const InsertBookForm = () => {
  const { handleSubmit, register, getValues, reset } = useForm({
    defaultValues: {
      title: "",
      author: "",
    },
  });
  const dispatch = useDispatch();

  const submit = () => {
    const payload = getValues();

    dispatch(
      bookSlice.actions.store({
        title: payload.title,
        author: payload.author,
      })
    );

    reset();
  };

  return (
    <Form>
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
      <Form.Group className="mb-3" controlId="authorInput">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Author"
          {...register("author", {
            required: true,
          })}
        />
      </Form.Group>
      <Button
        variant="primary"
        className="w-100"
        onClick={handleSubmit(submit)}
      >
        Insert Book
      </Button>
    </Form>
  );
};

export default InsertBookForm;
