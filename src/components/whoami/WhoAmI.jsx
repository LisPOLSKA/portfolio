import React, { useEffect, useState } from "react";
import "./whoami.scss";

const textOptions = ["IT", "Programmer", "Developer", "Tech Enthusiast"]; // Przeniesione poza komponent

function WhoAmI() {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentText(textOptions[index]);
      index = (index + 1) % textOptions.length; // Powtarzaj w pętli
    }, 2000); // Zmieniaj co 2 sekundy

    return () => clearInterval(interval); // Czyszczenie po zakończeniu komponentu
  }, []); // Brak zależności, bo textOptions się nie zmienia
  
  return (
    <section className="whoami">
      <div className="top">
        <h1>Who Am I?</h1>
      </div>
      <div className="bottom">
        <article id="iam">
          <h2>
            <span>I am a</span> <span id="who">{currentText}</span>
          </h2>
        </article>
        <article>
          <h2>Something about me</h2>
          <p>
            Hi, I'm Janek, and I'm passionate about IT. I program in C++ and C# to create games in Unity, and I use Python to develop Windows applications, like an audio mixer. I also build websites using HTML, CSS, and JavaScript, often working with React, as I did here. I'm currently a student in secondary school, and I live in Poland.<br/>
        
            I began my programming journey about 5 years ago when I discovered Arduino. I started learning C++ to build robots and useful projects like a weather station and a sound panel. Later, I picked up C# to develop games in Unity, followed by HTML for websites. After that, I learned PHP, and then moved on to JavaScript and React.<br/>

            When I'm not coding, I'm interested in the military, planes, and trains. I also enjoy playing computer games like Counter-Strike and World of Tanks. I love learning new things and constantly seek out new challenges.
          </p>
        </article>
      </div>
    </section>
  );
}

export default WhoAmI;
