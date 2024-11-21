import React, { useEffect, useState } from "react";

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
      <div>
        <p>
          Click on each image once, but do not click on an image more than once!
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <img
            key={card.id}
            src={card.image}
            alt={card.title}
            style={{
              width: "100px",
              height: "100px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Wievs;
