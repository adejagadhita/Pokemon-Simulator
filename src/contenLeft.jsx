import React from "react";

// import asset kartu untuk kiri
import cardLeft1 from "./assets/ungu1.png";
import cardLeft2 from "./assets/ungu2.png";
import cardLeft3 from "./assets/ungu3.png";
import cardLeft4 from "./assets/ungu4.png";
import cardLeft5 from "./assets/ungu5.png";

import forbidIcon from "./assets/BanCard.png";

//  komponen utama khusus kiri
export default function ContenLeft() {
  const leftCards = [cardLeft1, cardLeft2, cardLeft3, cardLeft4, cardLeft5];

  return (
    <div className="md:col-span-3 relative">
      {/* Ban button di atas card pertama */}
      <BanButton
        icon={forbidIcon}
        side="left"
        className="absolute -top-14 left-8 -translate-x-1/2"
      />

      {/* List kartu trainer kiri */}
      <aside className="p-2">
        <div className="space-y-2">
          {leftCards.map((src, idx) => (
            <Row key={`left-${idx}`} img={src} altText={`Trainer ${idx + 1}`} />
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
function BanButton({ icon, side = "left", className = "" }) {
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
