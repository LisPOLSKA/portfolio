import React from "react";
import ProjectsC from "../../components/projectsC/ProjectsC";
import "./projects.scss"

function Projects() {
  return (
    <div className="projects__page">
      <span>Here you can see my projects, if you want to know more about one of these, you can click "Check this out". I hope taht you like them. You can also contact with me about any of them in contact page.</span>
      <ProjectsC/>
    </div>
  );
}

export default Projects;
