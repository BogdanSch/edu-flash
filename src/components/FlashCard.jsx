import React, { useState } from "react";

export default function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlashCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`flashcards__item ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlashCardClick}
    >
      <div className="flashcards__item-front card">{question}</div>
      <div className="flashcards__item-back card">{answer}</div>
    </div>
  );
}
