import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Tekken8.css";
import { tekken8Fighters } from "../../data/tekken8";
import FighterCard from "../../components/fighter-card/FighterCard";

function Tekken8() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <div className="page">
      <Header />
      <main className="tekken-content">
        <h1 className="title-text">Tekken 8</h1>
        <p>The latest game that follows the Tekken franchise with The King of Iron Fist Tournament held by Kazuya Mishima</p>
        <h2>Some characters in the game:</h2>
        <section className="fighters-grid">
          {tekken8Fighters.map(fighter => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              backgroundClass="tekken-background"
            />
          ))}
        </section>
        <h2>Game mechanics:</h2>
        <section className="tekken-mechanics-section">
          <p>The Tekken saga, known for 3D style combat came to Tekken 8 with the tought of making the game more fast-paced so they created the Heat System.</p>
          <img className="tekken-heat-img" src="src/components/img/tekken8-heat-timer.png" alt="Heat Gauge" />
          <p>That is the Heat Gauge when transformed into the Heat Timer, lasts around 10 seconds and during those you have access to a lot of different options to make Heat last longer or spend it all for instant reward</p>
        </section>
        <button className="home-button" onClick={handleClick}>Go Home</button>
      </main>
      <Footer />
    </div>
  );
}

export default Tekken8;