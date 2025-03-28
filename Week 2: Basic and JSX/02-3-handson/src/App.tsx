import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="logo">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <Greeting />
    </>
  );
}

export default App;