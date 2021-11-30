import React from 'react';
import { useContext } from 'react';
import NoteContext from '../../context/notes/noteContext';
import AddNote from './AddNote';
import NoteShow from './NoteShow';

const Home = () => {
    const contex = useContext(NoteContext);
    const { notes, setNotes} = contex;
    console.log(notes);
    return (
        <div className="container  my-3 " style={{display:"flex", flexWrap:"wrap" , justifyContent:"center", alignItems:"center"}}>
            <AddNote/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            <NoteShow/>
            {notes && notes.map((note)=>(
                 <NoteShow note={note}/>
                ))}
        </div>
    )
}

export default Home
