import React from "react";
import './queries.css';
import "./App.css";
import NavBar from "./sections/navbar/navbar.component";
import Header from "./sections/header/header.component";
import WorkHistory from "./sections/workhistory/workhistory.component";
import Projects from "./sections/projects/projects.component";
import Contact from "./sections/contact/contact.component";
import Education from "./sections/education/education.component";
import useSticky from './hooks/useSticky';

function App() {
  const { isSticky, element } = useSticky()
  return (
    <div className="App">
      <NavBar sticky={isSticky} />
      <Header element={element} />
      <Projects id="projects-section" />
      <WorkHistory id="workhistory-section"/>
      <Education />
      <Contact />
    </div>
  );
}

export default App;
