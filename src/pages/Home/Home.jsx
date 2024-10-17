import React from "react";
import WhoAmI from "../../components/whoami/WhoAmI";
import ProjectsC from "../../components/projectsC/ProjectsC";
import ContactC from "../../components/contactC/ContactC";
import "./home.scss"

function Home() {
  return (
    <>
        <WhoAmI/>
        <ProjectsC/>
        <ContactC/>
    </>
  );
}

export default Home;