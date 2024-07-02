import { useState } from "react";
import FlashCard from "./components/FlashCard";

import gandalfImage from "./assets/images/gandalf-grey-white-differences-lotr.avif";
import sauronImage from "./assets/images/sauron-the-dark-lord.avif";

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
              <FlashCard
                question={`Obi-Wan Kenobi is a legendary Jedi Knight from the Star Wars universe. Known for his wisdom, combat skills, and strong connection to the Force, he plays a crucial role in the Galactic Republic's fight against the Sith and the Galactic Empire. His iconic phrases, such as "May the Force be with you," have become synonymous with the Star Wars franchise.`}
                answer={`Gandalf the Grey`}
                answerImage={gandalfImage}
                answerTextColor={`#f7f7f7`}
              />
              <FlashCard
                question={`Emperor Palpatine, also known as Darth Sidious, is the primary antagonist in the Star Wars saga. A Sith Lord, he rises to power by orchestrating the fall of the Galactic Republic and the Jedi Order, ultimately establishing the Galactic Empire. Palpatine is known for his sinister plans, political manipulating and dark side abilities.`}
                answer={`Sauron`}
                answerImage={sauronImage}
                answerTextColor={`#f7f7f7`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
