import "./Header.css"
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../img/Fight-Hub.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const GoHome = () => {
    navigate("/home");
  }

  const GoNews = () => {
    navigate("/news");
  }

  const GoUsers = () => {
    navigate("/user");
  }
  const GoRss = () => {
    navigate("/rss");
  }
  const GoAbout = () => {
    navigate("/home#about");
  }

  const GoChat = () => {
    navigate("/home#chat");
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
          <p onClick={() => { GoNews(); closeMiniMenu(); }} className="links text">News</p>
          <p onClick={() => { GoUsers(); closeMiniMenu(); }} className="links text">Log in/Sign up</p>
          <p onClick={() => { GoChat(); closeMiniMenu(); }} className="links text">Chat</p>
          <p onClick={() => { GoRss(); closeMiniMenu(); }} className="links text">RSS</p>
        </div>
      </div>
    </header>
  )
}

export default Header;