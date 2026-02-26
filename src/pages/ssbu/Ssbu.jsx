import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Ssbu.css";
import { ssbuFighters } from "../../data/ssbu";
import FighterCard from "../../components/fighter-card/FighterCard";

function Ssbu() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <div className="page">
      <Header />
      <main className="smash-content">
        <h1 className="title-text">Super Smash Bros. Utlimate</h1>
        <p>The latest game of the franchise with the biggest roster of characters from different third-party franchises</p>
        <h2>Some characters inside the game:</h2>
        <section className="fighters-grid">
          {ssbuFighters.map(fighter => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              backgroundClass="smash-background"
            />
          ))}
        </section>
        <h2>Game mechanics:</h2>
        <section className="sssbu-mechanics-section">
          <p>The Smash Bros. series is well known for their 2D plattformer style combat, in Ultimate this remains the same loved way with the addition of new small changes like the parry mechanic and directional airdodging</p>
        </section>
        <button className="home-button" onClick={handleClick}>Go Home</button>
      </main>
      <Footer />
    </div>
  );
}

export default Ssbu;