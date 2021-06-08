import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(5);
  console.log("WHAT IS COUNT:", count);
  // rendering
  function addOne() {
    setCount(count + 1); // hierna moet de pagina worden geupdate!
  }

  function addOneNOTLIKETHIS() {
    const counter = document.getElementById("counter");
    const currentCount = Number(counter.innerText);

    // count = count + 1;
    counter.innerText = currentCount + 1; // dom manipulatie / de pagina aan het updaten
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="counter">{count}</p>
        <button onClick={addOne}>+</button>
        <button onClick={addOneNOTLIKETHIS}>NOT LIKE THIS!</button>
      </header>
    </div>
  );
}

export default App;
