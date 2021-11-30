import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./component/body/Home";
import About from "./component/body/About";
import NoteState from "./context/notes/NoteState";
import './App.css';


function App() {
 
  return (
    <NoteState>
    <div className="app">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      </Routes>
      </Router>
    </div>
    </NoteState>
  );
 
}

export default App;
