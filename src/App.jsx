import { useState } from "react";
import FlashCard from "./components/FlashCard";

function App() {
  return (
    <main>
      <section className="flashcards">
        <div className="container">
          <div className="flashcards__wrap">
            <div className="text-content">
              <h1 className="flashcards__title">Edu Flash</h1>
              <p className="flashcards__description"></p>Edu Flash is a
              user-friendly flashcards app designed to make learning fast and
              fun. Create, organize, and review your flashcards anytime,
              anywhere, and boost your knowledge efficiently.
            </div>
            <div className="flashcards__list">
              <FlashCard question={`Question 1`} answer={`Answer 1`} />
              <FlashCard question={`Question 2`} answer={`Answer 2`} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
