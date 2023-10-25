import React, { useState } from "react";

const CardPicker = ({ cards = [] }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="card-picker">
      {cards.map((card, i) => (
        <Card
          key={i}
          card={card}
          onClick={handleCardClick}
          selected={selectedCard === card}
        />
      ))}
    </div>
  );
};

const Card = ({ card, onClick, selected }) => {
  return (
    <div className={`card ${selected ? "selected" : ""}`} onClick={onClick}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
};

export default CardPicker;
