import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  console.log("WHAT IS COUNT:", count);

  function addOne() {
    console.log("VOOR KLIK");
    setCount(count + 1); // hierna moet de pagina worden geupdate!
    // Hier heb je nog NIET de volgende state
    console.log("Na het klikken:", count); // 0
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
