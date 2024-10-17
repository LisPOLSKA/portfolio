import React from "react";
import "./projectC.scss"

function ProjectsC() {

  const projects = [
    {
      id: 1,
      name: "Audio mixer",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2FZrzut%20ekranu%202024-10-17%20190844.png?alt=media&token=ebb7e9a6-bd8f-4e16-98da-2f3ccde0d38c",
      description: "This is software for managing a sound mixer made with Arduino. The program is written in Python and utilizes Qt. It manages the deej configuration file and controls its process.",
      link: "https://github.com/LisPOLSKA/deej"
    },
    {
      id: 2,
      name: "Zombie game",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2FZrzut%20ekranu%20(763).png?alt=media&token=2bf103b0-df06-4ff4-9446-e2eb32eb27d8",
      description: "It's a game where you shoot zombies, and that's all there is to it. XD",
      link: "hhttps://mega.nz/file/3lwylbRB#NNstix4fIWkNSRb7TaVbczKm0Xl_BU6oWMtS1b0ssw4"
    },
    {
      id: 3,
      name: "Ball game",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2FZrzut%20ekranu%20(767).png?alt=media&token=01039cb5-5e5c-4964-8bc7-9186558a74e2",
      description: "It's my first game in Unity, where you move the ball through an obstacle course with different levels of difficulty.",
      link: "https://mega.nz/folder/e54gnSgA#WEHbMB88Nfq0Dq84Yl5zmA"
    },
    {
      id: 4,
      name: "Minecraft Computer",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2F17175287-image_l.webp?alt=media&token=eafe3af6-849f-446b-991b-395c66073cd3",
      description: "It's my first Minecraft computer, made with Redstone, but with help from the Project Red mod. It features an 8-bit ALU, registers, and an input system. I'm currently working on a 16-bit display, multiplication, and an improved BCD input system.",
      link: "https://www.planetminecraft.com/project/8bit-minecraft-computer-works/"
    },
    {
      id: 5,
      name: "PHP Forum",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2FZrzut%20ekranu%202024-10-17%20201557.png?alt=media&token=264b8d8d-395c-4c80-8b07-50256ed4fe40",
      description: "It's my biggest project in PHP. It's a forum where users can create posts and browse different categories. The platform also includes a simple authorization system for user registration and login.",
      link: "https://github.com/LisPOLSKA/social_portal"
    },
    {
      id: 6,
      name: "Social portal",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2Fatt.lu_akcGHdt9Zy3hF5ki3YBTkQuVviNS38-OKjfmGWP4%20(1).png?alt=media&token=7e20b9a8-2524-4baf-9163-a0ec014a0b6f",
      description: "It's my biggest project in React. It's also a forum where users can post, but it also includes features like friends, likes, comments, and much more is planned for the future. Once I finish the website, you'll be able to access it online.",
      link: "https://github.com/LisPOLSKA/forum"
    },
    {
      id: 7,
      name: "Arduino Robots",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2FZrzut%20ekranu%202024-10-17%20205409.png?alt=media&token=bdd445d3-b660-4cb6-8e87-9efb64e1db8a",
      description: "I made two robots using Arduino. They were built from a piece of board, an Arduino Uno clone, and a few electronic components. They were simple, but building them was a lot of fun.",
      link: "https://www.youtube.com/watch?v=mG59Fdtsdt8&list=PL9JI0hNcs3PsdNzQY4MhGTXqtHk5mEMMa"
    },
    {
      id: 8,
      name: "Test portfolio",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2FZrzut%20ekranu%202024-10-17%20210215.png?alt=media&token=b003e3e5-6bab-4fc8-adc3-5874be1bdbbe",
      description: 'This is my first website where I tried using SCSS. It was my first portfolio, so you could say it was a beta version of this website. You can also access it using this URL:',
      additionalLink: "https://lispolska.github.io/CV_1/",
      link: "https://github.com/LisPOLSKA/CV_1"
    },
    {
      id: 9,
      name: "React Portfolio",
      image: "https://firebasestorage.googleapis.com/v0/b/social-2-f8b9e.appspot.com/o/profiles%2FZrzut%20ekranu%202024-10-17%20211444.png?alt=media&token=e24504d2-e707-4178-a894-4afbf026f5b3",
      description: "This is my portfolio made in React, and yes, this is the page you're currently on. I created this using React and SCSS. I also made a contact form that uses Zoho Email and EmailJS. This is a summary of five years of my life, and it was very satisfying to see how the project evolved over the years. Link to GitHub:",
      additionalLink: "https://github.com/LisPOLSKA/portfolio",
      link: "https://lisko.ovh" 
    },
  ];

  return (
    <section className="projects">
      <h1>My projects</h1>
      <div className="container__projects">
        {projects.map((project) => (
          <article key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} referrerPolicy="no-referrer"/>
            <p>{project.description}{project.additionalLink ? <a href={project.additionalLink} target="_blank" rel="noreferrer" className="link">{project.additionalLink}</a> : ""}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Check this out</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsC;
