import "./Footer.css"
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();
  const ShowInfo = () => {
    navigate("/info");
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
        <div class="footer form-div">
          <form action=""></form>
        </div>
      </section>
      <p class="copy-text">&copy; 2026 FIGHTHUB. All rights reserved.</p>
      <p class="info-text" onClick={ShowInfo} to="">Privacy Policy | Cookies | Terms & Conditions</p>
    </footer>
  )
}

export default Footer;