import "./Header.css"
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import logo from "../img/Fight-Hub.png";

function Header() {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/home");
  }

  const GoUsers = () => {
    navigate("/user");
  }
  const GoRss = () => {
    navigate("/news");
  }
  const GoAbout = () => {
    GoHome();

    window.location.hash = "about"

    window.history.replaceState(null, null, " ");
  }
  const GoChat = () => {
    GoHome();

    window.location.hash = "chat"

    window.history.replaceState(null, null, " ");
  }

  const [mobileInterface, setMobileInterface] = useState(false);

  function toggleMenu() {
    setMobileInterface(!mobileInterface);
  }

  const closeMiniMenu = () => {
    setMobileInterface(false);
  }

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" onClick={GoHome} />
      <button onClick={toggleMenu} className="mini-menu-button">
        <FaBars />
      </button>
      <div className={`mini-menu ${mobileInterface ? "open" : ""}`}>
        <div className="links-section">
          <p onClick={() => { GoHome(); closeMiniMenu(); }} className="links text">Home</p>
          <p onClick={() => { GoAbout(); closeMiniMenu(); }} className="links text">About</p>
          <p onClick={() => { GoUsers(); closeMiniMenu(); }} className="links text">Log in/Sign up</p>
          <p onClick={() => { GoChat(); closeMiniMenu(); }} className="links text">Chat</p>
          <p onClick={() => { GoRss(); closeMiniMenu(); }} className="links text">RSS</p>
        </div>
      </div>
    </header>
  )
}

export default Header;