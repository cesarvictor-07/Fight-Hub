import "./UserAuth.css";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import logo from "../../components/img/Fight-Hub.png"
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/fb/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

function UserAuth() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      if (userOption === "0") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(userCredential.user, {
          displayName: username
        });
      } else {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      GoHome();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

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
          <form className="user-form" onSubmit={handleCreate}>
            <select id="user-option-select" value={userOption} onChange={(o) => setUserOption(o.target.value)}>
              <option value="0">Sign Up</option>
              <option value="1">Log In</option>
            </select>{userOption === "0" && (
              <section className="username-section">
                <h3>Username:</h3>
                <input type="text" placeholder="Your Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
              </section>
            )}
            <section className="email-section">
              <h3>Email:</h3 >
              <input type="email" placeholder="Your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
            </section>
            <section className="pass-section">
              <h3>Password:</h3>
              <input type="password" placeholder="Your Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
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
          <h3>Reminder: You need an account or be logged in to use the chat</h3>
      </main>
      <Footer />
    </div>
  );
}

export default UserAuth;