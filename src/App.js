import Navbar from "./component/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  return (
    <div className="app">
      <Router>
      <Navbar/>
      </Router>
    </div>
  );
 
}

export default App;
