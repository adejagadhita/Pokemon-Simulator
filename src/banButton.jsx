import React from "react";
import Ban from './assets/BanCard.png';


//ni ad tambahan d function
function BanCard({ position = "left", selected = false, pick = null, onSelect }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onSelect?.();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={selected ? "true" : "false"}
      className={`
        cursor-pointer absolute top-10 z-50 top-15
        ${position === "left" ? "left-13" : "" }
        ${position === "right" ? "right-13" : ""}
      `}
      //ni ttep pke code ke tp ad tmbhan biar bs d klik dll
      style={{ pointerEvents: "auto" }}
      title={position === "left" ? "Select left ban" : "Select right ban"}
    >
      <img
        src={Ban}
        alt="Ban Img"
        className="select-none"
        draggable="false"
        onClick={handleClick}
      />


      {selected && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="h-16 w-16  shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
        </div>
      )}

      {pick && (
        <>
          <div
            key={pick.name}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="h-16 w-16"
              style={{ animation: "pulse 900ms ease-out 2" }}
            />
            <span
              className="absolute h-16 w-16"
              style={{ animation: "ping 800ms ease-out 1" }}
            />
          </div>

          {/* gambar Pokémon di ban */}
          <img
            src={pick.image}
            alt={pick.name}
            className="absolute inset-0 m-auto h-12 w-12 object-contain pointer-events-none select-none z-10"
            draggable="false"
          />

          {/* badge 🚫 kecil di kanan-bawah */}
          <div
            className="absolute pointer-events-none z-20"
            style={{
              right: '2px',
              bottom: '2px'
            }}
            aria-hidden="true"
          >
            <div
              className="flex items-center justify-center rounded-full shadow-md"
              style={{
                width: '18px',
                height: '18px',
                background: 'rgba(176, 34, 20, 0.95)',
                boxShadow: '0 2px 6px rgba(0,0,0,0.35)'
              }}
            >
              <span
                className="select-none"
                style={{
                  fontSize: '15px',
                  lineHeight: 1,
                  color: 'white',
                }}
              >
                🚫
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BanCard;
