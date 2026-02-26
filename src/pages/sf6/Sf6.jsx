import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import FighterCard from "../../components/fighter-card/FighterCard";
import { sf6Fighters } from "../../data/sf6";
import "./Sf6.css"

function Sf6() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <div className="page">
      <Header />
      <main className="sf-content">
        <h1 className="title-text">Street Fighter 6</h1>
        <p>The sixth entry of the most popular fighting game franchise ever!</p>
        <h2>Some characters in the game:</h2>
        <section className="fighters-grid">
          {sf6Fighters.map(fighter => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              backgroundClass="sf6-background"
            />
          ))}
        </section>
        <h2>Game mechanics:</h2>
        <section className="sf6-mechanics-section">
          <p>The Street Fighter series is very well known for their 2D action, using motion inputs for the characters special and super movesbut Street fighter 6's mechanics are very different from every other street fighter game cause of the main thing, the Drive Gauge.</p>
          <h3>The Drive Gauge:</h3>
          <img className="sf6-img" src="src/components/img/300px-SF6_Drive_Gauge.jpg" alt="Drive Gauge" />
          <p>That right here is the drive gauge itself, as you can see there are 6 bars of drive, doing certain things in the game can consume the gauge in different amounts, once you use all your gauge your character will be in burnout state where you will be very vulnerable.</p>
        </section>
        <button className="home-button" onClick={handleClick}>Go Home</button>
      </main>
      <Footer />
    </div>
  );
}

export default Sf6;