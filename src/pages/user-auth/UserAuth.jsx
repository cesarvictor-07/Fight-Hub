import "./UserAuth.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function UserAuth() {
  return (
    <div className="page">
      <Header />
      <main className="user-section">
        <h1>Log In n' Sign Up</h1>
        <div className="form-container">
          <form className="user-form">
            <select id="">
              <option value="">Sign Up</option>
              <option value="">Log In</option>
            </select>
            <h3>Username:</h3>
            <input type="text" placeholder="Your Username..." />
            {/* <h3>Email:</h3>
            <input type="email" placeholder="Your email..." /> */}
            <h3>Password:</h3>
            <input type="password" placeholder="Your Password..." />
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>Don't have an account?
          <a href="" /*onClick={}*/>Sign up!</a></p>
      </main>
      <Footer />
    </div>
  );
}

export default UserAuth;