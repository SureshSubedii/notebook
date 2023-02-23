import "./App.css";
import {
  BrowserRouter as Router,
  Routes, //Switch replaced by Routes in the newer version.
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="IS "/>
          <div className="container">
          
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
