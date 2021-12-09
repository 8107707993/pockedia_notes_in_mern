import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./component/body/Home";
import About from "./component/body/About";
import NotesState from "./context/notes/NoteState";
import './App.css';
import Alerts from './component/body/Alerts';
import Footer from "./component/footer/Footer";
import Login from "./component/body/Login";
import Signup from "./component/body/Signup";
import { useState } from "react";


function App() {
const [alert, setAlert] = useState(null);
  
  document.addEventListener('mousemove',async (e)=>{
    const curser = document.querySelector('.curser');
    let x = await e.pageX;
    let y = await e.pageY;
    if (curser && x && y) {
      curser.style.top=y +"px ";
      curser.style.left=x +"px ";
      
    }

    
  })

  // document.addEventListener('click', ()=>{
    
  //   curser.classList.add("expendCursor");
  
  //   setTimeout(()=>{
  //     curser.classList.remove("expendCursor");
  //   }, 500)
  // })

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 
  return (
    <NotesState>
    <div className="app" >
      <div id="curser" className="curser"></div>
      <Router>
      <Navbar/>
      <Alerts alert={alert}/>
      <Routes>
      <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
      <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
    </NotesState>
  );
 
}

export default App;
