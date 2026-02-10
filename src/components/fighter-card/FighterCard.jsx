import { useState } from "react";
import "./FighterCard.css";

function FighterCard({ fighter, backgroundClass }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <article
      className={`fighter-card ${backgroundClass}`}
      onClick={toggleDescription}
    >
      <img
        src={fighter.image}
        alt={fighter.name}
        className="fighter-image"
      />

      <h3 className="fighter-name">{fighter.name}</h3>

      {isDescriptionVisible && (
        <p className="fighter-description">{fighter.description}</p>
      )}
    </article>
  );
}

export default FighterCard;