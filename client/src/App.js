import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";
import Update from './components/update/update'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div >
        
    <div className="main">

        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/create" element={<Create/>}/>
          <Route exact path="/read" element={<Read/>}/>
          <Route path="/update" element={<Update/>}/>
        </Routes>
    </div>
      </div>
    </Router>
  );
}

export default App;
