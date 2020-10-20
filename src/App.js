import React from "react";
import "./App.css";
import NavBar from "./sections/navbar/navbar.component";
import Header from "./sections/header/header.component";
import Projects from "./sections/projects/projects.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Projects id="projects-section" />
    </div>
  );
}

export default App;
