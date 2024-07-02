import React, { useState } from "react";

export default function FlashCard({
  question,
  answer,
  answerImage,
  answerTextColor,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlashCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`flashcards__item ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlashCardClick}
    >
      <div className="flashcards__item-front card">
        <p>{question}</p>
      </div>
      <div
        className="flashcards__item-back card"
        style={{ backgroundImage: `url(${answerImage})` }}
      >
        <strong style={{ color: answerTextColor }}>{answer}</strong>
      </div>
    </div>
  );
}
