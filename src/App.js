import logo from "./logo.svg";
import "./App.css";
import Wievs from "./components/Views/GeneralView";

function App() {
  return (
    <div>
      <Wievs score={0} bestScore={0} />
    </div>
  );
}

export default App;
