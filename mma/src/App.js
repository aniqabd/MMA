import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import Appbar from "./templates/Appbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
          <Appbar />
          <Routes>
            <Route path="/" component={<Home/>} />
            <Route path="/home" component={<Home/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;