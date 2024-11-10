// src/App.js
import React from "react";
import CanvasEditor from "./components/CanvasEditor";
import Toolbar from "./components/Toolbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>BHD Photo Editor</h1>
      <Toolbar />
      <CanvasEditor />
    </div>
  );
}

export default App;

