import React from "react";
import cardLeft1 from "./assets/ungu1.png";
import cardLeft2 from "./assets/ungu2.png";
import cardLeft3 from "./assets/ungu3.png";
import cardLeft4 from "./assets/ungu4.png";
import cardLeft5 from "./assets/ungu5.png";

export default function ContenLeft({ pokemons = [] }) {
  const leftCards = [cardLeft1, cardLeft2, cardLeft3, cardLeft4, cardLeft5];

  return (
    <aside className="p-2">
      <div className="space-y-2">
        {leftCards.map((bg, idx) => (
          <Row
            key={idx}
            bg={bg}
            altText={`Trainer ${idx + 1}`}
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
      {pokemon && ( 
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-2">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="absolute bottom-1 left-1 w-[40%]"
        />
        </div>
      )}
    </div>
  );
}
