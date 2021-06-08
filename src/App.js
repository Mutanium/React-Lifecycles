import "./App.css";

function App() {
  let count = 5;
  console.log("WHAT IS COUNT:", count);
  // rendering
  function addOne() {
    console.log("ADDING??");
    count = count + 1;
    // count++
    console.log("What is count after clicking??", count);

    // UPDATE DE PAGINA MET DE NIEUWE WAARDE
    document.getElementById("counter").innerText = count;
  }

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={addOne}>+</button>
      </header>
    </div>
  );
}

export default App;
