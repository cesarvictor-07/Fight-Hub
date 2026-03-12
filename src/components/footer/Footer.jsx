import "./Footer.css"
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();
  const ShowInfo = () => {
    navigate("/info");
  }
  const GoHome = () => {
    navigate("/home");
  }

  const GoUsers = () => {
    navigate("/user");
  }
  const GoRss = () => {
    navigate("/news");

    window.history.replaceState(null, null, " ");
  }
  const GoAbout = () => {
    GoHome();

    window.location.hash = "about"

    window.history.replaceState(null, null, " ");
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
        <p onClick={GoRss} className="links text">News</p>
        <p onClick={GoUsers} className="links text">Log in/Sign up</p>
        <p onClick={GoAbout} className="links text">About</p>
      </div>
      <p className="info-text" onClick={ShowInfo} to="">Privacy Policy | Cookies | Terms & Conditions</p>
    </footer>
  )
}

export default Footer;