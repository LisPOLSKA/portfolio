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
            Irure in qui consectetur aliquip culpa culpa cillum. Eiusmod reprehenderit dolor veniam occaecat labore deserunt ea amet fugiat aliquip irure duis eiusmod. Qui qui eiusmod esse cupidatat. Reprehenderit culpa minim mollit excepteur fugiat aliquip duis commodo irure. Non id enim commodo aliqua velit sint cupidatat cillum consequat Lorem quis irure consectetur. Est sunt aute aliqua id dolore dolor laboris qui labore labore.
          </p>
        </article>
      </div>
    </section>
  );
}

export default WhoAmI;
