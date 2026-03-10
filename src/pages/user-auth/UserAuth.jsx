import "./UserAuth.css";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import logo from "../../components/img/Fight-Hub.png"
import { useNavigate } from "react-router-dom";

function UserAuth() {
  const navigate = useNavigate();
  const [userOption, setUserOption] = useState("0");

  const wantSignUp = () => {
    setUserOption("0");
  }
  const wantLogIn = () => {
    setUserOption("1");
  }

  const GoHome = () => {
    navigate("/home");
  }

  return (
    <div className="page">
      <main className="user-section">
        <img src={logo} alt="Logo" onClick={GoHome} />
        <h1>Log In n' Sign Up</h1>
        <div className="form-container">
          <form className="user-form">
            <select id="user-option-select" value={userOption} onChange={(o) => setUserOption(o.target.value)}>
              <option value="0">Sign Up</option>
              <option value="1">Log In</option>
            </select>
            <section className="username-section">
              <h3>Username:</h3>
              <input type="text" placeholder="Your Username..." />
            </section>
            {userOption === "0" && (
              <section className="email-section">
                <h3>Email:</h3 >
                <input type="email" placeholder="Your email..." />
              </section>
            )}
            <section className="pass-section">
              <h3>Password:</h3>
              <input type="password" placeholder="Your Password..." />
            </section>
            <button type="submit">{userOption === "0" ? "Create Account" : "Log In"}</button>
          </form>
        </div>
        {userOption === "1" && (
          <section className="option-link-q">
            <p>Don't have an account?
              <a className="option-link" onClick={wantSignUp}> Sign up!</a></p>
          </section>
        )}
        {userOption === "0" && (
          <section className="option-link-q">
            <p>Already have an account?
              <a className="option-link" onClick={wantLogIn}> Log in now!</a></p>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default UserAuth;