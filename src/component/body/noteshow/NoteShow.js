import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../../../context/notes/noteContext";
import NoteItem from "./NoteItem";

const NotesShow = () => {
  const contex = useContext(NoteContext);
  const { notes, getAllNotes, editNote} = contex;
  const ref = useRef(null);
  const refClose = useRef(null);
  
  console.log(notes);
  const [note, setNote] = useState({id:"", edittitle: "", editdescription:"", edittag:""});

  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line 
  }, []);
  
  const updateModal = (currentnote) => {
    ref.current.click();
    setNote({id:currentnote._id, edittitle:currentnote.title,editdescription:currentnote.description,edittag:currentnote.tag})

  };

  const hendeleAddNote = (e) => {
    console.log(note.id)
    editNote(note.id , note.edittitle, note.editdescription, note.edittag)
    refClose.current.click();
  
  }

  const onChange= (e) =>{
    setNote({...note, [e.target.name]: e.target.value});
  }
  return (
    <div className="container notebody">
      {/* <!-- Button trigger modal --> */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ps-4 ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body pb-4">
              
              <div
                className="Formcontainer text mx-4"
                style={{ width: "60vw" }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className=" form-label"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    value={note.edittitle}
                    className="form-control"
                    id="edittitle"
                    name="edittitle"
                    onChange={onChange}
                    placeholder="Enter a Title"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    tag
                  </label>
                  <input
                  value={note.edittag}
                    type="text"
                    className="form-control"
                    id="edittag"
                    name="edittag"
                    onChange={onChange}
                    placeholder="Enter a Tag"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="editdescription"
                    name="editdescription"
                    onChange={onChange}
                    placeholder="Enter a Description..."
                    rows="3"
                    value={note.editdescription}
                  ></textarea>
                </div>
                
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={hendeleAddNote} className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {notes[0] &&
        notes[0].map((note) => (
          <NoteItem key={note._id} updateModal={updateModal} note={note} />
        ))}
    </div>
  );
};

export default NotesShow;
