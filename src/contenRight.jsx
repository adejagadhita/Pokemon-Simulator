import React from "react";
import cardRight1 from "./assets/orange6.png";
import cardRight2 from "./assets/orange7.png";
import cardRight3 from "./assets/orange8.png";
import cardRight4 from "./assets/orange9.png";
import cardRight5 from "./assets/orange10.png";

export default function ContenRight({
 
}) {
  const rightCards = [cardRight1, cardRight2, cardRight3, cardRight4, cardRight5];

  return (
    <aside className="p-2">
      <div className="space-y-2">
        {rightCards.map((bg, idx) => (
          <Row
            key={idx}
            bg={bg}
            altText={`Trainer ${6 + idx}`}
            
          />
        ))}
      </div>
    </aside>
  );
}

function Row({ bg, altText  }) {
  return (
    <div className="relative flex justify-center" >
      <img
        src={bg}
        alt={altText}
        draggable="false"
        className="w-full max-w-[180px] md:max-w-[200px] select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
      />



    </div>
  );
}
