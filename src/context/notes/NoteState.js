import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";

  const notesInital = [];
  const [notes, setNotes] = useState(notesInital);

  // Get All Notes
  const getAllNotes = async () => {
    // Api Call

    const responseApi = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('authToken'),
      },
    });
    const json = await responseApi.json();

    setNotes(json);
  };

  // Add a note
  const addNewNote = async (title, description, tag) => {
    // Api Call

    const responseApi = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('authToken'),
      },
      body: JSON.stringify({title, description , tag})
    });
    const note = await responseApi.json()
    console.log(note)
   

    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    // Api Call

    const responseApi = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('authToken'),
      },
    });
    const json = responseApi.json();
    console.log(json)
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //   Edit a note
  const editNote = async (id, title, description, tag) => {
    // Api Call

    const responseApi = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('authToken'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = responseApi.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic of edit note for clinet side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNewNote, editNote, deleteNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
