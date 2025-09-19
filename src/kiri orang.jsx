import avatar from './assets/kiri orang/avatar.svg';
import vector1 from './assets/kiri orang/vector1.svg';
import vector2 from './assets/kiri orang/vector2.svg';
import iconban from './assets/kiri orang/iconBan.svg';

const PlayerSlot = ({ trainerNumber, side, pokemon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex ${side === "left" ? "flex-row" : "flex-row-reverse"} 
                  bg-gray-700 items-center rounded-lg overflow-hidden w-15 lg:w-45`}
    >
      {/* Bagian: Badge / Pokemon */}
      <div
        className={`w-full md:w-25 h-15 flex items-center justify-center rounded-t-lg 
                   ${side === "left" ? "bg-accent1" : "bg-accent2"}`}
      >
        {pokemon ? (
        <div
            className={`${side === "left" ? "bg-card1 border-accent1" : "bg-card2 border-accent2"} 
                        relative width-12 height-12 text-4xl border-3 rounded-lg h-full w-full flex items-center justify-center`}
        >
            {/* Badge sebagai background */}
            <img
            src={side === "left" ? vector1 : vector2}
            alt="Badge"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Pokemon menimpa badge */}
            <img
            src={pokemon.image}
            alt={pokemon.name}
            className="relative w-full h-full object-contain z-10"
            />
        </div>
        ) : (
        <div
            className={`${side === "left" ? "bg-card1 border-accent1" : "bg-card2 border-accent2"} 
                        width-12 height-12 text-4xl border-3 rounded-lg h-full w-full flex items-center justify-center`}
        >
            <img
            src={side === "left" ? vector1 : vector2}
            alt="Badge"
            className="p-2 w-full h-full object-cover"
            />
        </div>
        )}

      </div>

      {/* Avatar + Nama */}
      <div className="hidden lg:flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <img src={avatar} alt={`Trainer ${trainerNumber}`} className="w-9 h-9" />
        </div>
        <div
          className={`flex flex-col items-center justify-center ${side === "left" ? "bg-accent1" : "bg-accent2"} w-full`}
        >
          <span className="text-black text-sm mt-1">Trainer {trainerNumber}</span>
        </div>
      </div>
    </div>
  );
};

// ---------------- Pokemon Card ----------------
const PokemonCard = ({ pokemon, isPicked, isBanned, onClick }) => {
  const cardClasses = `
        relative rounded-xl overflow-hidden shadow-lg transform 
        transition-all duration-200 ease-in-out
        h-20 w-18 border-2
        ${isPicked || isBanned
          ? 'border-borderchoose scale-105 opacity-70 cursor-not-allowed'
          : 'border-border cursor-pointer'}
    `;

  return (
    <div
      className={cardClasses}
      onClick={!isPicked && !isBanned ? onClick : undefined}
      style={{ backgroundColor: pokemon.color }}
    >
      <div className="flex items-center justify-center w-18 h-15 overflow-hidden relative">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-full object-cover hover:scale-120 transform transition-all duration-200 ease-in-out"
        />
        {isBanned && (
          <span className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <img src={iconban} alt="Banned" className="w-8 h-8" />
          </span>
        )}
      </div>
      <div
        className={`bg-border text-white text-center text-[10px] h-5 w-full flex items-center justify-center font-bold ${
          isPicked || isBanned ? 'bg-borderchoose' : 'bg-border'
        }`}
      >
        {pokemon.name.toUpperCase()}
      </div>
    </div>
  );
};
// ini juga bisa di hapus, tapi import bawah hapus juga biar ga error

// ---------------- Ban Button ----------------
const BanButton = ({ bannedPokemon, position, setBanTarget, pokemonData }) => {
  const pokemonId = position === "left" ? bannedPokemon[0] : bannedPokemon[1];
  const pokemon = pokemonData.find((p) => p.id === pokemonId);

  return (
    <>
      {pokemon ? (
        <div
          className={`relative w-12 flex justify-center mb-2 border-3 border-[#BE433C] bg-white rounded-lg ${position}`}
        >
          <img src={pokemon.image} alt={pokemon.name} className="w-full h-full object-cover" />
          <span className="absolute -bottom-2 -right-2 w-5 h-5 bg-black rounded-full border-2 flex items-center justify-center">
            <img src={iconban} alt="Icon Ban" className="w-full h-full object-cover" />
          </span>
        </div>
      ) : (
        <div
          className={`w-12 flex justify-center mb-2 border-2 border-[#BE433C] bg-[#525567] rounded-lg ${position}`}
          onClick={() => setBanTarget(position)}
        >
          <img src={iconban} alt="Icon Ban" className="w-full h-full object-cover p-1" />
        </div>
      )}
    </>
  );
};

export { PlayerSlot, BanButton, PokemonCard };