

import React from "react";

// import asset kartu untuk kanan
import cardRight1 from "./assets/orange6.png";
import cardRight2 from "./assets/orange7.png";
import cardRight3 from "./assets/orange8.png";
import cardRight4 from "./assets/orange9.png";
import cardRight5 from "./assets/orange10.png";

import forbidIcon from "./assets/BanCard.png";

//  komponen utama khusus kanan
export default function ContenRight() {
  const rightCards = [cardRight1, cardRight2, cardRight3, cardRight4, cardRight5];

  return (
    <div className="md:col-span-3 relative">
      

      {/* List kartu trainer kanan */}
      <aside className="p-2">
        <div className="space-y-2">
          {rightCards.map((src, idx) => (
            <Row key={`right-${idx}`} img={src} altText={`Trainer ${6 + idx}`} />
          ))}
        </div>
      </aside>
    </div>
  );
}

// komponen baris kartu
function Row({ img, altText }) {
  return (
    <div className="flex justify-center">
      <img
        src={img}
        alt={altText}
        draggable="false"
        className="w-full max-w-[180px] md:max-w-[200px] select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

// komponen BanButton
function BanButton({ icon, side = "right", className = "" }) {
  return (
    <div
      className={
        "z-20 h-14 w-14 md:h-16 md:w-16 rounded-xl " +
        "flex items-center justify-center " +
        className
      }
      title={side === "left" ? "Ban kiri" : "Ban kanan"}
    >
      <img
        src={icon}
        alt="ban"
        className="h-12 w-12 md:h-12 md:w-12 object-contain select-none"
        draggable="false"
      />
    </div>
  );
}
