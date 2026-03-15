import "./Footer.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
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

  const ShowInfo = () => {
    navigate("/info");
  }
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
  return (
    <footer>
      <section className="upperdog-section">
        <a className="icon github" href="https://github.com/cesarvictor-07/Fight-Hub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a className="icon youtube" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </section>
      <p className="copy-text">&copy; 2026 FIGHTHUB. All rights reserved.</p>
      <div className="web-link-section">
        <p onClick={GoHome} className="links text">Home</p>
        <p onClick={GoRss} className="links text">RSS</p>
        <p onClick={GoUsers} className="links text">Log in/Sign up</p>
        <p onClick={GoAbout} className="links text">About</p>
        <p onClick={GoChat} className="links text">Chat</p>
        <p onClick={GoNews} className="links text">News</p>
      </div>
      <p className="info-text" onClick={ShowInfo} to="">Privacy Policy | Cookies | Terms & Conditions</p>
    </footer>
  )
}

export default Footer;