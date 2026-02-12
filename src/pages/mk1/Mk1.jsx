import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Mk1.css";
import { mk1Fighters } from "../../data/mk1";
import FighterCard from "../../components/fighter-card/FighterCard";

function Mk1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <div className="page">
      <Header />
      <main className="mk-content">
        <h1 className="title-text">Mortal Kombat 1</h1>
        <p>A "remake" of the original mortal kombat including new mechanics and new guest characters.</p>
        <h2>Some characters in the game:</h2>
        <section className="fighters-grid">
          {mk1Fighters.map(fighter => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              backgroundClass="mk-background"
            />
          ))}
        </section>
        <h2>Game mechanics:</h2>
        <section className="mk-mechanics-section">
        </section>
        <button className="home-button" onClick={handleClick}>Go Home</button>
      </main>
      <Footer />
    </div>
  );
}

export default Mk1;