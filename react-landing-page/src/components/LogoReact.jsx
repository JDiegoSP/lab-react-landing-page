import "./LogoReact.css";
import react_logo from "../assets/react_logo.svg";

function LogoReact() {
  return <>
    <div className="LogoReact">
      <img src={react_logo} alt="React Logo" />
    </div>
  </>
}

export default LogoReact;