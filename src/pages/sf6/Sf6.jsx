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
        <button className="home-button" onClick={handleClick}>Go Home</button>
      </main>
      <Footer />
    </div>
  );
}

export default Sf6;