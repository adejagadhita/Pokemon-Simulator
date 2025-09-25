import React from "react";
import cardLeft1 from "./assets/ungu1.png";
import cardLeft2 from "./assets/ungu2.png";
import cardLeft3 from "./assets/ungu3.png";
import cardLeft4 from "./assets/ungu4.png";
import cardLeft5 from "./assets/ungu5.png";

export default function ContenLeft({
  picks = [],
  onSelectSlot,
  selectedIndex = -1,
}) {
  const leftCards = [cardLeft1, cardLeft2, cardLeft3, cardLeft4, cardLeft5];

  return (
    <aside className="p-2">
      <div className="space-y-2">
        {leftCards.map((bg, idx) => (
          <Row
            key={idx}
            bg={bg}
            altText={`Trainer ${idx + 1}`}
            pick={picks[idx]}
            isSelected={selectedIndex === idx}
            onClick={() => onSelectSlot?.(idx)}
          />
        ))}
      </div>
    </aside>
  );
}

function Row({ bg, altText, pick, isSelected, onClick }) {
  return (
    <div className="relative flex justify-center" onClick={onClick}>
      <img
        src={bg}
        alt={altText}
        draggable="false"
        className="w-full max-w-[180px] md:max-w-[200px] select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
      />

      {isSelected && (
        <div
          className="absolute top-[52%] left-[2%] -translate-y-1/2 h-20 w-20 pointer-events-none z-[6]"
          aria-hidden="true"
        >
          <div className="absolute inset-0  bg-[#6f59f5]/35 blur-md" />
          <div className="absolute inset-0 " />
        </div>
      )}

      {pick && (
        <>
          <div
            className="absolute top-[52%] left-[2%] -translate-y-1/2 h-20 w-20 pointer-events-none z-[5]"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 "
              style={{ animation: "pulse 900ms ease-out 2" }}
            />
            <span
              className="absolute inset-0 "
              style={{ animation: "ping 800ms ease-out 1" }}
            />
          </div>

          <img
            src={pick.image}
            alt={pick.name}
            className="absolute top-[52%] left-[2%] -translate-y-1/2 h-20 w-20 z-10 object-contain"
          />
        </>
      )}
    </div>
  );
}
