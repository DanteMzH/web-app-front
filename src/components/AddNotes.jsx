import axios from 'axios';
import { useEffect, useState } from 'react';
import React, { Fragment } from 'react';
import base_url from '../api/bootapi';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { toast } from 'react-toastify';

export const AddNotes = () => {
  useEffect(() => {
    document.title = "Add Notes";
  }, []);

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(note);
    postDatatoServer(note);
  };

  const postDatatoServer = (data) => {
    axios.post(`${base_url}/notes`, data).then(
      (response) => {
        console.log(response);
        toast.success("Note added successfully");
        setNote({
          id: "",
          title: "",
          description: "",
        });
      },
      (error) => {
        console.log(error);
        toast.error("Error adding note");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center m-3">Fill Notes Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId"> Notes Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            value={note.id}
            onChange={(e) => setNote({ ...note, id: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title"> Notes Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 400 }}
            value={note.description}
            onChange={(e) => setNote({ ...note, description: e.target.value })}
          />
        </FormGroup>
        <Container>
          <Button type="submit" color="success">
            Add Note
          </Button>
          <Button
            type="button"
            onClick={() => {
              setNote({
                id: "",
                title: "",
                description: "",
              });
            }}
            color="warning ml-2"
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};
