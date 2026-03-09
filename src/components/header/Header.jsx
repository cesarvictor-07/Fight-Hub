import "./Header.css"
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/home");
  }

  const GoUsers = () => {
    navigate("/user");
  }
  const GoAbout = () => {
    window.location.hash = "about"

    window.history.replaceState(null, null, " ");
  }
  const GoChat = () => {
    window.location.hash = "chat"

    window.history.replaceState(null, null, " ");
  }
  return (
    <header className="header">
      <img src="src\components\img\Fight-Hub.png" alt="Logo" className="logo" onClick={GoHome} />
      <div className="header links">
        <p onClick={GoHome} className="links text">Home</p>
        <p onClick={GoAbout} className="links text">About</p>
        <p onClick={GoUsers} className="links text">Log in/Sign up</p>
        <p onClick={GoChat} className="links text">Chat</p>
      </div>
    </header>
  )
}

export default Header;