import React, { useState, useEffect } from 'react';
import { Notes } from './Notes';
import { Alert } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AllNotes = () => {
  useEffect(() => {
    document.title = "All Notes";
  }, []);

  const [allNotes, setAllNotes] = useState([]);

  const getAllNotesFromServer = async () => {
    try {
      const response = await axios.get(`${base_url}/notes`);
      toast.success("Notes have been loaded");
      setAllNotes(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllNotesFromServer();
  }, []);

  const handleUpdateNotes = (updatedNote) => {
    // Actualizar la lista de notas inmediatamente
    setAllNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const handleDeleteNote = (deletedNoteId) => {
    // Actualizar la lista de notas inmediatamente después de eliminar
    setAllNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== deletedNoteId)
    );
  };

  const activeNotes = allNotes.filter((note) => !note.archived);
  const archivedNotes = allNotes.filter((note) => note.archived);

  return (
    <div>
      <h1>All Notes</h1>

      <Alert color="info">Active Notes</Alert>
      {activeNotes.length > 0 ? (
        activeNotes.map((item, index) => (
          <Notes
            key={item.id}
            note={item}
            update={handleUpdateNotes}
            deleteNote={handleDeleteNote}
            index={index + 1} // Enumeración de notas activas
          />
        ))
      ) : (
        <p>No active notes</p>
      )}

      <Alert color="warning">Archived Notes</Alert>
      {archivedNotes.length > 0 ? (
        archivedNotes.map((item, index) => (
          <Notes
            key={item.id}
            note={item}
            update={handleUpdateNotes}
            deleteNote={handleDeleteNote}
            index={index + 1} // Enumeración de notas archivadas
          />
        ))
      ) : (
        <p>No archived notes</p>
      )}
    </div>
  );
};
