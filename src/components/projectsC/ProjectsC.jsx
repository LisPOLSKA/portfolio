import React from "react";
import "./projectC.scss"

function ProjectsC() {

  const projects = [
    {
      id: 1,
      name: "Projekt 1",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2Fzdjecie-konkursowe.jpg?alt=media&token=a7958502-00b7-42fa-9ba2-a683309d8056",
      description: "To jest opis Projektu 1. Aplikacja webowa do zarządzania zadaniami.",
      link: "https://example.com/projekt1"
    },
    {
      id: 2,
      name: "Projekt 2",
      image: "https://example.com/images/projekt2.png",
      description: "To jest opis Projektu 2. Aplikacja mobilna do nauki języków.",
      link: "https://example.com/projekt2"
    },
    {
      id: 3,
      name: "Projekt 3",
      image: "https://example.com/images/projekt3.png",
      description: "To jest opis Projektu 3. Strona internetowa portfolio dla fotografa.",
      link: "https://example.com/projekt3"
    },
    {
      id: 4,
      name: "Projekt 4",
      image: "https://example.com/images/projekt3.png",
      description: "To jest opis Projektu 4. Strona internetowa portfolio dla fotografa.",
      link: "https://example.com/projekt3"
    },
    {
      id: 5,
      name: "Projekt 5",
      image: "https://example.com/images/projekt3.png",
      description: "To jest opis Projektu 5. Strona internetowa portfolio dla fotografa.",
      link: "https://example.com/projekt3"
    },
    {
      id: 6,
      name: "Projekt 6",
      image: "https://example.com/images/projekt3.png",
      description: "To jest opis Projektu 6. Strona internetowa portfolio dla fotografa.",
      link: "https://example.com/projekt3"
    },
    {
      id: 7,
      name: "Projekt 7",
      image: "https://example.com/images/projekt3.png",
      description: "To jest opis Projektu 7. Strona internetowa portfolio dla fotografa.",
      link: "https://example.com/projekt3"
    },
    {
      id: 8,
      name: "Projekt 8",
      image: "https://example.com/images/projekt8.png",
      description: "To jest opis Projektu 8. Strona internetowa portfolio dla fotografa.",
      link: "https://example.com/projekt3"
    },
    {
      id: 9,
      name: "Projekt 9",
      image: "https://example.com/images/projekt3.png",
      description: "To jest opis Projektu 9. Strona internetowa portfolio dla fotografa.",
      link: "https://example.com/projekt3"
    },
  ];

  return (
    <section className="projects">
      <h1>My projects</h1>
      <div className="container__projects">
        {projects.map((project) => (
          <article key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Check this out</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsC;
