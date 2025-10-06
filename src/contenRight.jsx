import React from "react";
import cardRight1 from "./assets/orange6.png";
import cardRight2 from "./assets/orange7.png";
import cardRight3 from "./assets/orange8.png";
import cardRight4 from "./assets/orange9.png";
import cardRight5 from "./assets/orange10.png";

export default function ContenRight({ pokemons = [] }) {
  const rightCards = [cardRight1, cardRight2, cardRight3, cardRight4, cardRight5];

  return (
    <aside className="p-2">
      <div className="space-y-2">
        {rightCards.map((bg, idx) => (
          <Row
            key={idx}
            bg={bg}
            altText={`Trainer ${idx + 6}`} // tim kanan mulai Trainer 6
            pokemon={pokemons[idx]}
          />
        ))}
      </div>
    </aside>
  );
}

function Row({ bg, altText, pokemon }) {
  return (
    <div className="relative flex justify-center">
      
      <img
        src={bg}
        alt={altText}
        className="w-full max-w-[180px] md:max-w-[200px] select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
      />

      {/* Pokemon yang dipick */}
      {pokemon && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-2">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="absolute bottom-1 right-1 w-[40%]"
        />
        </div>
      )}
    </div>
  );
}
