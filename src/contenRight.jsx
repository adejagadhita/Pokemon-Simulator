import React from "react";
import cardRight1 from "./assets/orange6.png";
import cardRight2 from "./assets/orange7.png";
import cardRight3 from "./assets/orange8.png";
import cardRight4 from "./assets/orange9.png";
import cardRight5 from "./assets/orange10.png";

export default function ContenRight({
  picks = [],
  onSelectSlot,
  selectedIndex = -1,
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
          className="absolute top-[52%] left-[59%] -translate-y-1/2 h-20 w-20 pointer-events-none z-[6]"
          aria-hidden="true"
        >
          <div className="absolute inset-0  bg-[#f08a4a]/35 blur-md" />
          <div className="absolute inset-0 " />
        </div>
      )}

      {pick && (
        <>
          <div
            className="absolute top-[52%] left-[59%] -translate-y-1/2 h-20 w-20 pointer-events-none z-[5]"
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
            className="absolute top-[52%] left-[59%] -translate-y-1/2 h-20 w-20 z-10 object-contain"
          />
        </>
      )}
    </div>
  );
}
