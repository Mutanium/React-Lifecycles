import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(5);

  console.log("WHAT IS COUNT:", count);

  function addOne() {
    setCount(count + 1); // hierna moet de pagina worden geupdate!
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={addOne}>+</button>
      </header>
    </div>
  );
}

export default App;
