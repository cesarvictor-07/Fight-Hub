import Home from "../pages/home/Home";
import "./Header.css"



function Header() {
  return(
    <header className="header">
      <img src="" alt="Logo" className="logo"/>
      <div className="header links">
        <p className="links text">Home</p>
        <p className="links text">About</p>
        <p className="links text">Sign Up</p>
        <p className="links text">Contact Us</p>
      </div>
    </header>
  )
}

export default Header;