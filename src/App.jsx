import { useState, useEffect } from "react";
<<<<<<< HEAD
import { pokemonData } from './pokemonData';
import { PlayerSlot, BanButton, PokemonCard } from './kiri orang.jsx';
// pokemonCard bisa di hapus aja

export default function App() {
  const DRAFT_TIME = 20;
  const [timer, setTimer] = useState(DRAFT_TIME);
  const [isDrafting, setIsDrafting] = useState(false);
  const [pickedPokemon, setPickedPokemon] = useState([]);
  const [bannedPokemon, setBannedPokemon] = useState([null, null]); // [leftBanId, rightBanId]
  const [slotPokemon, setSlotPokemon] = useState(Array(10).fill(null));
  const [activeSlot, setActiveSlot] = useState(null);
  const [banTarget, setBanTarget] = useState(null);

  useEffect(() => {
    if (!isDrafting || timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isDrafting, timer]);

  const handleStartDraft = () => {
    setIsDrafting(true);
    setTimer(DRAFT_TIME);
    setPickedPokemon([]);
    setBannedPokemon([null, null]);
    setSlotPokemon(Array(10).fill(null));
  };

  const handlePickPokemon = (pokemonId) => {
    // Jika Pokemon sudah dibanned → tidak bisa dipilih
    // if (bannedPokemon.includes(pokemonId)) return;

    // Mode Ban
    if (banTarget) {
      const newBans = [...bannedPokemon];
      if (banTarget === "left") newBans[0] = pokemonId;
      if (banTarget === "right") newBans[1] = pokemonId;
      setBannedPokemon(newBans);
      setBanTarget(null);
      return;
    }

    // Mode Normal → assign ke slot
    if (pickedPokemon.includes(pokemonId) || activeSlot === null) return;
    const selectedPokemon = pokemonData.find((p) => p.id === pokemonId);
    const newSlots = [...slotPokemon];
    newSlots[activeSlot] = selectedPokemon;
    setSlotPokemon(newSlots);
    setPickedPokemon([...pickedPokemon, pokemonId]);
    setActiveSlot(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* Header */}
      <header className="absolute w-[400px] h-[70px] top-0 text-center z-10 bg-white/90 rounded-b-4xl">
        <div className="h-2 flex flex-row items-left justify-center">
          {isDrafting ? (
            <div className="w-full h-full bg-primary"></div>
          ) : (
            <>
              <div className="w-1/2 h-full bg-primary"></div>
              <div className="w-1/2 h-full bg-secondary"></div>
            </>
          )}
        </div>
        {isDrafting ? (
          <h1 className="text-xl text-primary">Purple Team Choosing</h1>
        ) : (
          <h1 className="text-xl text-primary">Welcome to Draft Simulator!</h1>
        )}
        <div className="rounded-lg px-6 py-1">
          {isDrafting ? (
            <span className="text-6xl font-black text-secondary text-stroke-white">
              {timer}
            </span>
          ) : (
            <span>
              <button
                className="bg-secondary text-white font-bold rounded-full px-10 py-3"
                onClick={handleStartDraft}
              >
                Start Draft
              </button>
            </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col mt-30 p-3">
        {/* Ban Buttons */}
        <div className="mb-4 flex justify-between">
          <div onClick={() => handlePickPokemon(1)}>
          <BanButton
            position="left"
            bannedPokemon={bannedPokemon}
            setBanTarget={setBanTarget}
            pokemonData={pokemonData}
          />
          </div>
          <div onClick={() => handlePickPokemon(1)}>
          <BanButton
            position="right"
            bannedPokemon={bannedPokemon}
            setBanTarget={setBanTarget}
            pokemonData={pokemonData}
          />
          </div>
        </div>

        <div className="flex gap-2 w-full max-w-7xl">
          {/* Tim Kiri */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <PlayerSlot
                key={i}
                trainerNumber={i}
                side="left"
                pokemon={slotPokemon[i]}
                onClick={() => { setActiveSlot(i); handlePickPokemon(i); }}
              />
            ))}
          </div>

          {/* Grid Pokemon */}
          <div className="max-h-[70vh] overflow-auto p-1">
            <div className="grid grid-cols-3 lg:grid-cols-7 md:grid-cols-4 gap-3">
              <div className="h-20 w-18"></div>
              {/* {pokemonData.map((pokemon) => (
                <div
                  key={pokemon.id}
                  onClick={() => isDrafting && handlePickPokemon(pokemon.id)}
                >
                  <PokemonCard
                    pokemon={pokemon}
                    isPicked={pickedPokemon.includes(pokemon.id)}
                    isBanned={bannedPokemon.includes(pokemon.id)}
                  />
                </div>
              ))} */}
              {/* ini bisa di hapus aja */}
            </div>
          </div>

          {/* Tim Kanan */}
          <div className="flex flex-col gap-4">
            {[ 6, 7, 8, 9, 10].map((i) => (
              <PlayerSlot
                key={i}
                trainerNumber={i}
                side="right"
                pokemon={slotPokemon[i]}
                onClick={() => { setActiveSlot(i); handlePickPokemon(i); }}
              />
            ))}
          </div>
        </div>
      </main>
=======
import bg from './assets/bg.png';
import Top from './top.jsx';
import Card from './card.jsx';



function App() {


  return (
    <div>
      {/* Background */}
      <img
        className="bg-cover bg-center h-screen w-full absolute z-0 "
        src={bg}
        alt="Background"
      />

      <div className="">
        <Top />
        </div>

      <div className="">
        <Card />
        </div>
        
>>>>>>> 9eb5f31709c0e37ccbd4e84448c95db00b6ea688
    </div>
    
  );
}
