import "./Header.css"
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate=useNavigate();
  const GoHome = () => {
    navigate("/home");
  }
  return(
    <header className="header">
      <img src="src\components\img\Fight-Hub.png" alt="Logo" className="logo" onClick={GoHome}/>
      <div className="header links">
        <p onClick={GoHome} className="links text">Home</p>
        <p onClick={GoHome} to="/#about" className="links text">About</p>
        <p className="links text">Sign Up</p>
        <p className="links text">Contact Us</p>
      </div>
    </header>
  )
}

export default Header;