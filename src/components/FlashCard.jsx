import React from "react";
import { useEffect, useRef } from "react";

export default function FlashCard({ question, answer }) {
    
  const handleFlashCardClick = (event) => {

  };
  return (
    <div className="flashcards__item card p-4" onClick={handleFlashCardClick}>
      <div className="flashcards__item-question active" ref={}>
        {question}
      </div>
      <div className="flashcards__item-answer" ref={}>{answer}</div>
    </div>
  );
}
