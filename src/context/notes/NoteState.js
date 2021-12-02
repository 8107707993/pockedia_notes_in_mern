import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInital = [ 
    {
      _id: "61a4797daf69ce17a04061db",
      user: "61a2068638d457ff8e541af0",
      title: "hello",
      description: "Hello this is my first note 1",
      tag: "start",
      date: "2021-11-29T06:55:57.258Z",
      __v: 0,
    },
    {
      _id: "61a4797daf69ce17a04061dd",
      user: "61a2068638d457ff8e541af0",
      title: "hello",
      description: "Hello this is my first note 2",
      tag: "start",
      date: "2021-11-29T06:55:57.732Z",
      __v: 0,
    },
    {
      _id: "61a4797eaf69ce17a04061df",
      user: "61a2068638d457ff8e541af0",
      title: "hello",
      description: "Hello this is my first note 3",
      tag: "start",
      date: "2021-11-29T06:55:58.074Z",
      __v: 0,
    },
    {
      _id: "61a4797eaf69ce17a04061e1",
      user: "61a2068638d457ff8e541af0",
      title: "hello",
      description: "Hello this is my first note 4",
      tag: "start",
      date: "2021-11-29T06:55:58.416Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInital);

  return (
    <NoteContext.Provider value={{notes ,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
