import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import FighterCard from "../../components/fighter-card/FighterCard";
import { sf6Fighters } from "../../data/sf6";
import "./Sf6.css"

function Sf6() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <h1 className="title-text">Street Fighter 6</h1>
      <p>The sixth entry of the most popular fighting game franchise ever!</p>
      <section className="fighter-grid">
        {sf6Fighters.map(fighter => (
          <FighterCard
            key={fighter.id}
            fighter={fighter}
            backgroundClass="sf6-background"
          />
        ))}
      </section>
      <button className="button home" onClick={handleClick}>Go back to home page</button>
      <Footer />
    </>
  );
}

export default Sf6;