//aku tambahin usememo dan usestate
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg from "./assets/bg.png";
import Top from "./top.jsx";
import Card from "./card.jsx";
import ContenLeft from "./contenLeft.jsx";
import ContenRight from "./contenRight.jsx";
import Ban from "./banButton.jsx";

function App() {
  //aku tambahin leftpicks dll, liat ini d bwh
  const [leftPicks, setLeftPicks] = useState([null, null, null, null, null]);
  const [rightPicks, setRightPicks] = useState([null, null, null, null, null]);

  //dibawah ini code baru
  const [currentTurn, setCurrentTurn] = useState("left"); // "left" = tim purple mulai dulu

  const [selectedSlot, setSelectedSlot] = useState(null);

  const [banLeft, setBanLeft] = useState(null);
  const [banRight, setBanRight] = useState(null);
  const [selectedBan, setSelectedBan] = useState(null);

  const disabledNames = useMemo(() => {
    const names = [];
    leftPicks.forEach((p) => p && names.push(p.name));
    rightPicks.forEach((p) => p && names.push(p.name));
    if (banLeft) names.push(banLeft.name);
    if (banRight) names.push(banRight.name);
    return new Set(names);
  }, [leftPicks, rightPicks, banLeft, banRight]);

  const bannedNames = useMemo(() => {
    const names = [];
    if (banLeft) names.push(banLeft.name);
    if (banRight) names.push(banRight.name);
    return new Set(names);
  }, [banLeft, banRight]);

  function handlePick({ name, image }) {
    if (selectedBan) {
      if (selectedBan === "left" && !banLeft && currentTurn ==="left") { //ditambahin currenturn yg right jg
        setBanLeft({ name, image });
      } else if (selectedBan === "right" && !banRight && currentTurn === "right") {
        setBanRight({ name, image });
      }
      setSelectedBan(null);
      setSelectedSlot(null);
      return;
    }

    if (!selectedSlot) return;

    const { side, index } = selectedSlot;
    if (side !==currentTurn) return; //ini d tmbhin, ini mecegah pick oleh tim yg bukan gliran

    if (side === "left") {
      setLeftPicks((prev) => {
        if (prev[index]) return prev;
        const next = [...prev];
        next[index] = { name, image };
        return next;
      });
      setCurrentTurn("right"); //gnti giliran
    } else {
      setRightPicks((prev) => {
        if (prev[index]) return prev;
        const next = [...prev];
        next[index] = { name, image };
        return next;
      });
      setCurrentTurn("left"); //gnti gliran
    }
    setSelectedSlot(null);
  }

  function handleSelectTrainer(side, index) {
    setSelectedBan(null);
    if (
      selectedSlot &&
      selectedSlot.side === side &&
      selectedSlot.index === index
    ) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot({ side, index });
    }
  }

  function handleSelectBan(which) {
    setSelectedSlot(null);
    setSelectedBan((prev) => (prev === which ? null : which));
  }
  //smpe sini

  const isDraftDone =
    leftPicks.every((p) => p !== null) && rightPicks.every((p) => p !== null);



  //ini code mu yaa, gaada berubah, tp ak tambahin code untuk ngeclicknyaa
  return (
    <div>
      <img
        className="bg-cover bg-center h-screen w-full absolute z-0 "
        src={bg}
        alt="Background"
      />

      {isDraftDone ? (
        <AnimatePresence>
          <motion.div
            key="vs-screen"
            className="relative flex items-center justify-center h-screen z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 5, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ContenLeft picks={leftPicks} />
            </motion.div>

            <motion.h1
              className="text-[100px] font-bold text-[#fff] mx-16 drop-shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            >
              {" "}
              VS
            </motion.h1>

            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 5, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ContenRight picks={rightPicks} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <div className="">
            <Top />
            {/*tambahannnn d bwh untuk gliran tim*/}
            <div className="text-center mt-4 text-white font-bold text-2xl">
              {currentTurn === "left" ? "🟣 Purple" : "🟠 Orange" }
            </div>
          </div >

          <div className="flex flex-row justify-between items-start px-10 pt-4 ">
            <div className="flex flex-col items-start gap-2 mt-10 ">
              <ContenLeft
                /* kaya yang d bwh ini ak tmbhin code ini biar bs d klik trainer kiriiinyaaa */
                picks={leftPicks}
                onSelectSlot={(i) => handleSelectTrainer("left", i)}
                selectedIndex={ selectedSlot?.side === "left" ? selectedSlot.index : -1 }
                //ada ta,bahan ini d bwh
                disabled={currentTurn !=="left"} //hanya bs d klik saat gliran tim kiri 
              />

              <Ban
                position="left"
                //ban kiri ni jg ak tambahin
                selected={selectedBan === "left"}
                pick={banLeft}
                onSelect={() => {
                  //ini ad tambahan d tmbhin if currentturn
                  if (currentTurn === "left")  {
                  handleSelectBan("left")}
                }
                }
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Card
                //ni jga
                onPick={handlePick}
                disabledNames={disabledNames}
                bannedNames={bannedNames}
              />
            </div>

            <div className="flex flex-col items-end gap-2 mt-10 ">
              <ContenRight
                //ni trainer kanan sm ja ky yyg kiri
                picks={rightPicks}
                onSelectSlot={(i) => handleSelectTrainer("right", i)}
                selectedIndex={ selectedSlot?.side === "right" ? selectedSlot.index : -1 }
                //ni ad tambahan
                disabled={currentTurn !== "right"} //hny bs  d klik pas gliran tim kanan
              />
              <Ban
                //ni ban trainer kiri
                position="right"
                selected={selectedBan === "right"}
                pick={banRight}
                onSelect={() => {
                  //ini ad tmbahan bwhnya
                  if (currentTurn === "right") {
                  handleSelectBan("right")}
                }
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
