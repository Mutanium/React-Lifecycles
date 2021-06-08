import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("WHAT IS COUNT:", count);

  // 2 argumenten:
  // 1e: callback -> wat wil je doen
  // 2e: dependency array: -> wanneer wil je dit doen

  useEffect(() => {
    console.log("LEEG DEPENDENCY ARRAY, MOUNTING");
  }, []);

  useEffect(() => {
    console.log("VOER DIT UIT, WANNEER COUNT VERANDERD");
    if (count >= 10) {
      setCount(0);
    }

    // cleanup: voordat count veranderd
    return () => {
      console.log("VOER DIT UIT VOOR COUNT VERANDERD");
    };
  }, [count]);

  useEffect(() => {
    // console.log("Ik ga luisteren of de gebruiker scrollt");
    // add a global event listener here
    // window.addEventListener("scroll", () => {
    //   // doe iets wanneer de gebruiker scrolled
    // });
    // return functie uit useffect, deze wordt uitgevoer on unmount
    return () => {
      console.log("DO THIS ON UN MOUNT");
      // we slaan het formulier op in local storage
      // window.removeEventListener("scroll");
    };
  }, []);

  function addOne() {
    // console.log("VOOR KLIK");
    setCount(count + 1); // hierna moet de pagina worden geupdate!
    // Hier heb je nog NIET de volgende state
    // console.log("Na het klikken:", count); // 0
    // Hier na pas:
    // Onder de motorkap: App()
  }

  function setTo0() {
    setCount(0);
    // na de tweede keer state op nul, wordt de echte dom niet geupadate
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={addOne}>+</button>
        <button onClick={setTo0}>0</button>
      </header>
    </div>
  );
}

export default App;
