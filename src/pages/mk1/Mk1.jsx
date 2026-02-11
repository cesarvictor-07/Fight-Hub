import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./Mk1.css";
import { mk1Fighters } from "../../data/mk1";
import FighterCard from "../../components/fighter-card/FighterCard";

function Mk1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <section className="mk-content">
        <h1 className="title-text">Mortal Kombat 1</h1>
        <section className="fighters-grid">
          {mk1Fighters.map(fighter => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              backgroundClass="mk-background"
            />
          ))}
        </section>
        <button className="button home" onClick={handleClick}>Go back to home page</button>
      </section>
      <Footer />
    </>
  );
}

export default Mk1;