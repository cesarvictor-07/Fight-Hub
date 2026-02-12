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
        <button className="home-button" onClick={handleClick}>Go Home</button>
      </main>
      <Footer />
    </div>
  );
}

export default Tekken8;