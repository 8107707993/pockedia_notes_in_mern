import React  from 'react';
import AddNote from './noteshow/AddNote';
import NoteShow from './noteshow/NoteShow';

const Home = () => {
 
    return (
        <div className="container  my-3 " style={{display:"flex", flexWrap:"wrap" , justifyContent:"center", alignItems:"center"}}>
            <AddNote/>
           <NoteShow/>
            
        </div>
    )
}

export default Home
