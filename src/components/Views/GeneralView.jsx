import React, { useEffect, useState } from "react";
import "./View.css";

function GeneralView({ score, bestScore, onCardClick, shuffleCards }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const API_KEY = "KZoVyyxyn3ASW9BEuBRNxwDdjX6EwNRr";
    const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=12`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.data.map((gif) => ({
          id: gif.id,
          image: gif.images.fixed_width.url,
          title: gif.title,
        }));
        setCards(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (id) => {
    onCardClick(id);
    setCards(shuffleCards(cards));
  };

  return (
    <div>
      <div className="top-head">
        <p>
          Click on each image once, but do not click on an image more than once!
        </p>
        <div>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
      <div className="grid-container">
        {cards.map((card) => (
          <img
            className="images"
            key={card.id}
            src={card.image}
            alt={card.title}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default GeneralView;
