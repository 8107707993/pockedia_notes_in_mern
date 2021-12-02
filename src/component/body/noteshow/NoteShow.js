import React, { useContext } from "react";
import NoteContext from "../../../context/notes/noteContext";
import NoteItem from "./NoteItem";

const NotesShow = () => {
  const contex = useContext(NoteContext);
  const { notes, setNotes } = contex;
  console.log(notes);
  return (
    <div className="container"style={{display:"flex", flexWrap:"wrap" , justifyContent:"center", alignItems:"center"}}>
      {notes && notes.map((note) => 
      (<NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesShow;
