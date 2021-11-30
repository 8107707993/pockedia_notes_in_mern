import React from "react";
import './Body.css'

const AddNote = () => {
  return (
    <div className="Formcontainer text mx-4" style={{width:"60vw"}} >
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className=" form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter a Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          tag
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter a Tag"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter a Description..."
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success btnAddNote">AddNote</button>
    </div>
  );
};

export default AddNote;
