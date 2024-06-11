import "./App.css";
import StarsCanvas from "./components/canvas/stars";
import CardFlip from "./components/cards/card-flip";
import Writer from "./components/typeWriter/writer";

function App() {
  return (
    <div className="App">
      <main>
        <StarsCanvas />
        <div>
          <Writer />
          <CardFlip />
        </div>
      </main>
    </div>
  );
}

export default App;
