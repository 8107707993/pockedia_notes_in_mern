import React, { useContext, useState } from "react";
import NoteContext from "../../../context/notes/noteContext";
import '../Body.css'

const AddNote = (props) => {
  const [note, setNote] = useState({title: "", description:"", tag:""});
  const context = useContext(NoteContext);
  const {addNewNote} = context;

  const hendeleAddNote = (e) => {
      e.preventDefault();
      addNewNote(note.title, note.description, note.tag);
      setNote({title: "", description:"", tag:""});
      props.showAlert("Note Added Successfully", "success");

  
  }

   
  const onChange= (e) =>{
    setNote({...note, [e.target.name]: e.target.value});
  }

  return (
    <div className="Formcontainer text mx-4" style={{width:"60vw"}} >
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className=" form-label">
          Title
        </label>
        <input
        value={note.title}
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={onChange}
          placeholder="Enter a Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          tag
        </label>
        <input
        value={note.tag}
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          onChange={onChange}
          placeholder="Enter a Tag"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
        value={note.description}
          className="form-control"
          id="description"
          name="description"
          onChange={onChange}
          placeholder="Enter a Description..."
          rows="3"
        ></textarea>
      </div>
      <button type="submit" onClick={hendeleAddNote} className="btn  btnAddNote">AddNote</button>
    </div>
  );
};

export default AddNote;
