import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const SsbuGo = () => {
    navigate("/Ssbu");
  }
  const Sf6Go = () => {
    navigate("/Sf6");
  }
  const T8Go = () => {
    navigate("/Tekken8");
  }
  const Mk1Go = () => {
    navigate("/Mk1");
  }
  return (
    <div className="page">
      <Header />
      <div className="title">
        <h1 className="main-text">Welcome to Fight Hub!</h1>
      </div>
      <div className="button-container">
        <button className="button smash" onClick={SsbuGo}>Go to Smash Bros Ultimate page</button>
        <button className="button sf6" onClick={Sf6Go}>Go to Street Fighter 6 page</button>
        <button className="button tekken" onClick={T8Go}>Go to Tekken 8 page</button>
        <button className="button mk1" onClick={Mk1Go}>Go to Mortal Kombat 1 page</button>
      </div>
      <section id="about" className="about-section">
        <h1>About us</h1>
        <p>Here in fight hub you can checkout a bunch of your favourite fighting games, see the game mechanichs, characters and more!</p>
      </section>
      <section className="contact-section">
        <h1>Contact us</h1>
        <p>Tell us what you think and give suggestions!</p>
        <form action=""></form>
      </section>
      <Footer />
    </div>
  );
}

export default Home;