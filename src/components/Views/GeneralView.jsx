import React, { useEffect, useState } from "react";
import "./View.css";

function Wievs({ score, bestScore }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const API_KEY = "KZoVyyxyn3ASW9BEuBRNxwDdjX6EwNRr";
    const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=12`;

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
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

  return (
    <div>
      <div className="top-head">
        <div>
          <p>
            Click on each image once, but do not click on an image more than
            once!
          </p>
        </div>
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
          />
        ))}
      </div>
    </div>
  );
}

export default Wievs;
