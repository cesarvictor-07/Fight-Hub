import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Home.css";
import Map from "../../components/map/Map";

function Home() {
  const navigate = useNavigate();

  const SsbuGo = () => {
    navigate("/super-smash-bros-ultimate");
  }
  const Sf6Go = () => {
    navigate("/street-fighter-6");
  }
  const T8Go = () => {
    navigate("/tekken-8");
  }
  const Mk1Go = () => {
    navigate("/mortal-kombat-1");
  }
  return (
    <div className="page">
      <Header />
      <main className="home-content">
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
          <p>The project of Fight Hub was thought of as a class project by a fighting game enjoyer, Cesvic07 who's known for going to tournaments for different games:</p>
          <ul>
            <li>
              <a className="cesvic" href="https://www.supermajor.gg/ultimate/player/Cesvic07?id=S2506028" target="_blank" rel="noopener noreferrer">Smash Bros. Ultimate</a>
            </li>
            <li>
              <a className="cesvic" href="https://www.supermajor.gg/sf6/player/Cesvic07?id=S2506028" target="_blank" rel="noopener noreferrer">Street Fighter 6</a>
            </li>
            <li>
              <a className="cesvic" href="https://www.supermajor.gg/tekken8/player/Cesvic07?id=S2506028" target="_blank" rel="noopener noreferrer">Tekken 8</a>
            </li>
          </ul>
          <h3>Here you have a map to know where to locate our HQ:</h3>
          <Map />
        </section>
        <section id="contact" className="contact-section">
          <h1>Contact us</h1>
          <p>Tell us what you think and give suggestions!</p>
          <form action=""></form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;