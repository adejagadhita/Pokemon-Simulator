import React, { useEffect, useState } from "react";

import bg from "./assets/bg.png";
import Top from "./top.jsx";
import Card from "./card.jsx";
import ContenLeft from "./contenLeft.jsx";
import ContenRight from "./contenRight.jsx";
import Ban from "./banButton.jsx";
import pokemons from "./pokemonList.js";  //aku simpen pokemonny d pokemonlist ya soalny kl import dsni kbnyakn (buat pokemon random )

function App() {
  const [turn, setTurn] = useState("purple");
  const [countdown, setCountdown] = useState(null);
  const [phase, setPhase] = useState("ban");
  const [banned, setBanned] = useState({ purple: null, orange: null });
  const [picked, setPicked] = useState({ purple: [], orange: [] });

  const MAX_PICKS = 5; // batas pokemon per tim


  useEffect(() => {
    if (countdown === null) return;

    // stop timer kalau semua pick sudah selesai
    if (phase === "pick" && isAllPicked()) {
      setCountdown(null);
      return;
    }

    if (countdown === 0) {
      if (phase === "ban") {
        handleAutoBan();
      } else if (phase === "pick") {
        handleAutoPick();
      }
      return;
    }

    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, phase, turn, picked]);

  // CEK apakah semua sudah pick
  const isAllPicked = () => {
    return (
      picked.purple.length >= MAX_PICKS &&
      picked.orange.length >= MAX_PICKS
    );
  };

  
  const handleStart = () => {
    setCountdown(20);
    setTurn("purple");
    setPhase("ban");
    setPicked({ purple: [], orange: [] });
    setBanned({ purple: null, orange: null });
  };

  
  const handleBan = (pokemon) => {
    if (phase !== "ban") return;
    setBanned((prev) => ({ ...prev, [turn]: pokemon }));

    if (turn === "purple") {
      setTurn("orange");
      setCountdown(20);
    } else {
      setTurn("purple");
      setCountdown(20);
      setPhase("pick");
    }
  };

  const handleAutoBan = () => {
  if (phase !== "ban") return;

  const available = pokemons.filter(
    (p) =>
      p.name !== banned.purple?.name &&
      p.name !== banned.orange?.name
  );
  const random = available[Math.floor(Math.random() * available.length)];  //ppilih pokemon secara acak sesuai yg masih

  setBanned((prev) => ({ ...prev, [turn]: random }));  //nyimpen pokemon yang sudh terpilih secara acak ke banned

  if (turn === "purple") {
    setTurn("orange");
    setCountdown(20);
  } else {
    setTurn("purple");
    setCountdown(20);
    setPhase("pick");
  }
};



  const handlePick = (pokemon) => {
    if (phase !== "pick") return;
    if (isAllPicked()) return; // stop pick kalau sudah penuh

    setPicked((prev) => ({
      ...prev,
      [turn]: [...prev[turn], pokemon],
    }));

    // jika belum selesai, lanjut giliran
    const nextTurn = turn === "purple" ? "orange" : "purple";
    setTurn(nextTurn);

    // kalau sudah penuh -> stop timer
    if (!isAllPicked()) {
      setCountdown(20);
    } else {
      setCountdown(null);
    }
  };


  const handleAutoPick = () => {
  if (phase !== "pick") return;
  if (isAllPicked()) return;

  const pickedNames = [
    ...picked.purple.map((p) => p.name),
    ...picked.orange.map((p) => p.name),
    banned.purple?.name,
    banned.orange?.name,
  ];

  const available = pokemons.filter((p) => !pickedNames.includes(p.name));

  const random = available[Math.floor(Math.random() * available.length)];

  setPicked((prev) => ({
    ...prev,
    [turn]: [...prev[turn], random],
  }));

  const nextTurn = turn === "purple" ? "orange" : "purple";
  setTurn(nextTurn);

  if (!isAllPicked()) {
    setCountdown(20);
  } else {
    setCountdown(null);
  }
};


  return (
    <div>
      <img
        className="bg-cover bg-center h-screen w-full absolute z-0"
        src={bg}
        alt="Background"
      />

      <div className="relative z-10">
        <Top countdown={countdown} turn={turn} onStart={handleStart} />
      </div>

      <div className="flex flex-row justify-between items-start px-10 pt-4">
        {/* LEFT TRAINER */}
        <div className="flex flex-col items-start gap-2 mt-10">
          <ContenLeft pokemons={picked.purple} />
          <Ban position="left" pokemon={banned.purple} />
        </div>

        {/* POKEMON GRID */}
        <div className="flex flex-wrap justify-center gap-2">
          <Card
            onPick={phase === "ban" ? handleBan : handlePick}
            disabledNames={new Set([
              ...picked.purple.map((p) => p.name),
              ...picked.orange.map((p) => p.name),
              banned.purple?.name,
              banned.orange?.name, //pokemon yg  sdh terbanned tdk bs d click lagi!

            ])}
            bannedNames={new Set([
              banned.purple?.name,
              banned.orange?.name,
            ])}
          />
        </div>

        {/* RIGHT TRAINER */}
        <div className="flex flex-col items-end gap-2 mt-10">
          <ContenRight pokemons={picked.orange} />
          <Ban position="right" pokemon={banned.orange} />
        </div>
      </div>
    </div>
  );
}
export default App;