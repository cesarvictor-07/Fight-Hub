import "./Header.css"
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

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
    setMobileInterface(false);
  }

  return (
    <header className="header">
      <img src="src\components\img\Fight-Hub.png" alt="Logo" className="logo" onClick={GoHome} />
      <button onClick={toggleMenu} className="mini-menu-button">
        <FaBars />
      </button>
      <div className={`mini-menu ${mobileInterface ? "open" : ""}`}>
        <div className="header links">
          <p onClick={GoHome} className="links text">Home</p>
          <p onClick={GoAbout} className="links text">About</p>
          <p onClick={GoUsers} className="links text">Log in/Sign up</p>
          <p onClick={GoChat} className="links text">Chat</p>
          <p onClick={GoRss} className="links text">News</p>
        </div>
      </div>
    </header>
  )
}

export default Header;