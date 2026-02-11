import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./Ssbu.css";
import { ssbuFighters } from "../../data/ssbu";
import FighterCard from "../../components/fighter-card/FighterCard";

function Ssbu() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <section className="smash-content">
        <h1 className="title-text">Super Smash Bros. Utlimate</h1>
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
        <button className="button home" onClick={handleClick}>Go back to home page</button>
      </section>
      <Footer />
    </>
  );
}

export default Ssbu;