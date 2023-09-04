import "./App.css";
import Navbar from "./components/Navbar";
import LogoReact from "./components/LogoReact";
import PrincipalText from "./components/PrincipalText";
import HomeButtons from "./components/HomeButtons";
import SecundaryText from "./components/SecundaryText";

function App() {
  
  return (
    <div className="App">
      <div className="App-Principal">
        <Navbar />
        <LogoReact />
        <PrincipalText />
        <HomeButtons />
      </div>
      <div className="App-Secundary">
        <SecundaryText />
      </div>
    </div>
  );
}

export default App;
