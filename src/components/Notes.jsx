import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';

export const Notes = ({ note, update, deleteNote, archiveNote, unarchiveNote, index }) => {
  const [editingNote, setEditingNote] = useState({
    isEditing: false,
    title: note.title,
    description: note.description,
  });

  const handleUpdateNote = async () => {
    try {
      const response = await axios.put(`${base_url}/notes/${note.id}`, {
        title: editingNote.title,
        description: editingNote.description,
      });
      // Actualizar el estado local inmediatamente
      setEditingNote((prevEditingNote) => ({
        ...prevEditingNote,
        isEditing: false,
      }));
      // Actualizar el estado global (si es necesario)
      update(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveChanges = () => {
    handleUpdateNote();
  };

  const handleDeleteNote = () => {
    axios.delete(`${base_url}/notes/${note.id}`).then(
      () => {
        // Eliminar la nota inmediatamente después de la confirmación
        deleteNote(note.id);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleArchiveNote = async () => {
    try {
      const response = await axios.post(`${base_url}/notes/${note.id}/archive`);
      // Actualizar la nota y la enumeración
      update(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnarchiveNote = async () => {
    try {
      const response = await axios.post(`${base_url}/notes/${note.id}/unarchive`);
      // Actualizar la nota y la enumeración
      update(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardBody>
        {editingNote.isEditing ? (
          <Form>
            <FormGroup>
              <Label for="editedTitle">Title:</Label>
              <Input
                type="text"
                id="editedTitle"
                value={editingNote.title}
                onChange={(e) => setEditingNote({
                  ...editingNote,
                  title: e.target.value,
                })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="editedDescription">Description:</Label>
              <Input
                type="textarea"
                id="editedDescription"
                value={editingNote.description}
                onChange={(e) => setEditingNote({
                  ...editingNote,
                  description: e.target.value,
                })}
              />
            </FormGroup>
            <Button color="success" onClick={handleSaveChanges}>Save Changes</Button>
          </Form>
        ) : (
          <>
            <CardSubtitle>{index}. {note.title}</CardSubtitle>
            <CardText>{note.description}</CardText>
            <Container className='text-center'>
              <Button color='danger' onClick={handleDeleteNote}>Delete</Button>
              <Button color='warning' onClick={() => setEditingNote({
                ...editingNote,
                isEditing: true,
              })}>Edit</Button>
              {note.archived ? (
                <Button color='info' onClick={handleUnarchiveNote}>Unarchive</Button>
              ) : (
                <Button color='info' onClick={handleArchiveNote}>Archive</Button>
              )}
            </Container>
          </>
        )}
      </CardBody>
    </Card>
  );
};
