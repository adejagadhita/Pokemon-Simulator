//aku tambahin usememo dan usestate
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg from "./assets/bg.png";
import Top from "./top.jsx";
import Card from "./card.jsx";
import ContenLeft from "./contenLeft.jsx";
import ContenRight from "./contenRight.jsx";
import Ban from "./banButton.jsx";

function App() {
  // baruu
  const [turn, setTurn] = useState ("purple");
  const [countdown, setCountdown] = useState (null); 
  const [phase, setPhase] = useState("ban");
  const [banned, setBanned] = useState({purple: null, orange: null});
  const [picked, setPicked] = useState({purple: [], orange: []})

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      handleAutoBan();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleStart = () => {
    setCountdown (20);
    setTurn("purple");
    setPhase("ban");
  };

  const handleBan = (pokemon) => {
      setBanned((prev) => ({...prev, [turn]: pokemon}));
     
      if (turn === "purple") {
        setTurn("orange");
        setCountdown(20);
      }else{
        setTurn("purple");
        setCountdown(20);
        setPhase("pick");
      }
    };
 

  const handleAutoBan = () => {
    if (phase === "ban") {
      const random = { name: "random pokemon", image: ""};
      setBanned((prev) => ({...prev, [turn]: random}));
     
    if (turn === "purple"){
      setTurn("orange");
      setCountdown(20);
    }else{
      setTurn("purple");
      setCountdown(20);
      setPhase("pick");
    }
    }
  };
// ked dini
  
  

  return (
    // sini isi sikit"
    <div>
      <img
        className="bg-cover bg-center h-screen w-full absolute z-0 "
        src={bg}
        alt="Background"
      />

      <div className="relative z-10">
        <Top countdown={countdown} turn={turn} onStart={handleStart} />
      </div>

      <div className="flex flex-row justify-between items-start px-10 pt-4 ">
        <div className="flex flex-col items-start gap-2 mt-10 ">
          <ContenLeft
        
          />

          <Ban
            position="left"
           pokemon={banned.purple}
      
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Card onPick={handleBan} disabledNames={new Set()} bannedNames={new Set()}/>
        </div>
 
        <div className="flex flex-col items-end gap-2 mt-10 ">
          <ContenRight />
          <Ban position="right"
          pokemon={banned.orange} />
        </div>
      </div>
    </div>
  );
}
export default App;
