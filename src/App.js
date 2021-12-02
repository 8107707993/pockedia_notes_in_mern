import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./component/body/Home";
import About from "./component/body/About";
import NotesState from "./context/notes/NoteState";
import './App.css';
import Alerts from './component/body/Alerts'


function App() {
 
  return (
    <NotesState>
    <div className="app">
      <Router>
      <Navbar/>
      <Alerts/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      </Routes>
      </Router>
    </div>
    </NotesState>
  );
 
}

export default App;
