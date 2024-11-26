import React, { useState } from "react";
import GeneralView from "../Views/GeneralView";

function Score() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // Kartları karıştıran fonksiyon
  const shuffleCards = (cards) => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Kart tıklama işlemi
  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0); // Kart daha önce tıklanmışsa skoru sıfırla
      setClickedCards([]);
    } else {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > bestScore) {
          setBestScore(newScore); // Yeni skor en yüksekten büyükse güncelle
        }
        return newScore;
      });
      setClickedCards((prevCards) => [...prevCards, id]);
    }
  };

  return (
    <div>
      <GeneralView
        score={score}
        bestScore={bestScore}
        onCardClick={handleCardClick}
        shuffleCards={shuffleCards}
      />
    </div>
  );
}

export default Score;
