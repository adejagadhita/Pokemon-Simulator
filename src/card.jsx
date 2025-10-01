import React from "react";
import Pattern from "./assets/Pattern.png";

import Absol from "./assets/Absol.png";
import Aegish from "./assets/Aegish.png";
import Alolan from "./assets/Alolan Ninetales.png";
import Azulmaril from "./assets/Pokémon=Azulmaril.png";
import Balestoise from "./assets/Pokémon=Blastoise.png";
import Blissey from "./assets/Pokémon=Blissey.png";
import Buzzwole from "./assets/Pokémon=Buzzwole.png";

import Carizard from "./assets/Pokémon=Charizard.png";
import Cinderace from "./assets/Pokémon=Cinderace.png";
import Clefable from "./assets/Pokémon=Clefable.png";
import Cramorant from "./assets/Pokémon=Cramorant.png";
import Comfey from "./assets/Pokémon=Comfey.png";
import Crustle from "./assets/Pokémon=Crustle.png";
import Decidueye from "./assets/Pokémon=Decidueye.png";

import Delphox from "./assets/Pokémon=Delphox.png";
import Dodrio from "./assets/Pokémon=Dodrio.png";
import Dragapult from "./assets/Pokémon=Dragapult.png";
import Dragonite from "./assets/Pokémon=Dragonite.png";
import Duraludon from "./assets/Pokémon=Duraludon.png";
import Eldegoss from "./assets/Pokémon=Eldegoss.png";
import Espeon from "./assets/Pokémon=Espeon.png";

import Garchomp from "./assets/Pokémon=Garchomp.png";
import Gardevoir from "./assets/Pokémon=Gardevoir.png";
import Gengar from "./assets/Pokémon=Gengar.png";
import Glaceon from "./assets/Pokémon=Glaceon.png";
import Goodra from "./assets/Pokémon=Goodra.png";
import Greedent from "./assets/Pokémon=Greedent.png";
import Greninja from "./assets/Pokémon=Greninja.png";

import Hoopa from "./assets/Pokémon=Hoopa.png";
import Lapras from "./assets/Pokémon=Lapras.png";
import Lucario from "./assets/Pokémon=Lucario.png";
import Machamp from "./assets/Pokémon=Machamp.png";
import Mamosine from "./assets/Pokémon=Mamowsine.png";
import Mew from "./assets/Pokémon=Mew.png";
import Mime from "./assets/Pokémon=Mr. Mime.png";

import Pikachu from "./assets/Pokémon=Pikachu.png";
import Sableye from "./assets/Pokémon=Sableye.png";
import Scizor from "./assets/Pokémon=Scizor.png";
import Slowbro from "./assets/Pokémon=Slowbro.png";
import Snorlax from "./assets/Pokémon=Snorlax.png";
import Sylveon from "./assets/Pokémon=Sylveon.png";
import TalonFlame from "./assets/Pokémon=Talonflame.png";

import Trevenant from "./assets/Pokémon=Trevenant.png";
import Tsareena from "./assets/Pokémon=Tsareena.png";
import Tyranitar from "./assets/Pokémon=Tyranitar.png";
import Urshifu from "./assets/Pokémon=Urshifu.png";
import Venusaur from "./assets/Pokémon=Venusaur.png";
import Wigglytuff from "./assets/Pokémon=Wigglytuff.png";
import Zacian from "./assets/Pokémon=Zacian.png";
import Zeraora from "./assets/Pokémon=Zeraora.png";
import Zoroark from "./assets/Pokémon=Zoroark.png";


//code mu ttep terpakai tp emang ad tambahannnnnnnn biar bs d klik, dibanned!
function PokemonCard({ name, image, bgColor, disabled, banned, onClick }) {
  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      className={`relative cursor-pointer outline-none transition-transform duration-150
                  ${disabled ? "opacity-40 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.99]"}`}
      title={name}
    >
      <div className=" inset-0 bg-[#220A3D] pt-[3px] px-[3px] pb-[2px] rounded-[15px] flex flex-col items-center ">
        <div
          className={`relative flex flex-col items-center justify-center   overflow-hidden rounded-t-[10px] h-20 w-20 ${bgColor} group`}
        >
          <img
            src={Pattern}
            alt="pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <img
            src={image}
            alt={name}
            className="relative z-10  object-contain transition-transform duration-150 group-hover:scale-125"
          />

        

          
        </div>
        <p className="relative z-10 text-white font-bold oxo">{name}</p>
      </div>
    </button>
  );
}

export default function PokemonGrid({ onPick, disabledNames, bannedNames }) {
  const pokemons = [
    { name: "Absol", image: Absol, bgColor: "bg-[#29A5E3]" },
    { name: "Aegish", image: Aegish, bgColor: "bg-[#CE5FD3]" },
    { name: "Alolan", image: Alolan, bgColor: "bg-[#F16C38]" },
    { name: "Azulmaril", image: Azulmaril, bgColor: "bg-[#CE5FD3]" },
    { name: "Balestoise", image: Balestoise, bgColor: "bg-[#ACED5B]" },
    { name: "Blissey", image: Blissey, bgColor: "bg-[#FECC51]" },
    { name: "Buzwole", image: Buzzwole, bgColor: "bg-[#CE5FD3]" },
    { name: "Charizad", image: Carizard, bgColor: "bg-[#CE5FD3]" },
    { name: "Cinderace", image: Cinderace, bgColor: "bg-[#F16C38]" },
    { name: "Clefable", image: Clefable, bgColor: "bg-[#FECC51]" },
    { name: "Comfey", image: Comfey, bgColor: "bg-[#FECC51]" },
    { name: "Cramorant", image: Cramorant, bgColor: "bg-[#F16C38]" },
    { name: "Crustle", image: Crustle, bgColor: "bg-[#ACED5B]" },
    { name: "Decidueye", image: Decidueye, bgColor: "bg-[#F16C38]" },
    { name: "Delphox", image: Delphox, bgColor: "bg-[#F16C38]" },
    { name: "Dodrio", image: Dodrio, bgColor: "bg-[#29A5E3]" },
    { name: "Dragapult", image: Dragapult, bgColor: "bg-[#F16C38]" },
    { name: "Dragonite", image: Dragonite, bgColor: "bg-[#CE5FD3]" },
    { name: "Duraludon", image: Duraludon, bgColor: "bg-[#F16C38]" },
    { name: "Eldegoss", image: Eldegoss, bgColor: "bg-[#FECC51]" },
    { name: "Espeon", image: Espeon, bgColor: "bg-[#F16C38]" },
    { name: "Garchomp", image: Garchomp, bgColor: "bg-[#CE5FD3]" },
    { name: "Gardevoir", image: Gardevoir, bgColor: "bg-[#F16C38]" },
    { name: "Gengar", image: Gengar, bgColor: "bg-[#29A5E3]" },
    { name: "Glaceon", image: Glaceon, bgColor: "bg-[#F16C38]" },
    { name: "Goodra", image: Goodra, bgColor: "bg-[#ACED5B]" },
    { name: "Greedent", image: Greedent, bgColor: "bg-[#ACED5B]" },
    { name: "Greninja", image: Greninja, bgColor: "bg-[#F16C38]" },
    { name: "Hoopa", image: Hoopa, bgColor: "bg-[#FECC51]" },
    { name: "Lapras", image: Lapras, bgColor: "bg-[#ACED5B]" },
    { name: "Lucario", image: Lucario, bgColor: "bg-[#CE5FD3]" },
    { name: "Machamp", image: Machamp, bgColor: "bg-[#CE5FD3]" },
    { name: "Mamosine", image: Mamosine, bgColor: "bg-[#ACED5B]" },
    { name: "Mew", image: Mew, bgColor: "bg-[#F16C38]" },
    { name: "Mime", image: Mime, bgColor: "bg-[#FECC51]" },
    { name: "Pikachu", image: Pikachu, bgColor: "bg-[#F16C38]" },
    { name: "Sableye", image: Sableye, bgColor: "bg-[#FECC51]" },
    { name: "Scizor", image: Scizor, bgColor: "bg-[#CE5FD3]" },
    { name: "Slowbro", image: Slowbro, bgColor: "bg-[#ACED5B]" },
    { name: "Snorlax", image: Snorlax, bgColor: "bg-[#ACED5B]" },
    { name: "Sylveon", image: Sylveon, bgColor: "bg-[#F16C38]" },
    { name: "TalonFlame", image: TalonFlame, bgColor: "bg-[#29A5E3]" },
    { name: "Trevenant", image: Trevenant, bgColor: "bg-[#ACED5B]" },
    { name: "Tsareena", image: Tsareena, bgColor: "bg-[#CE5FD3]" },
    { name: "Tyranitar", image: Tyranitar, bgColor: "bg-[#CE5FD3]" },
    { name: "Urshifu", image: Urshifu, bgColor: "bg-[#CE5FD3]" },
    { name: "Venusaur", image: Venusaur, bgColor: "bg-[#F16C38]" },
    { name: "Wigglytuff", image: Wigglytuff, bgColor: "bg-[#FECC51]" },
    { name: "Zacian", image: Zacian, bgColor: "bg-[#CE5FD3]" },
    { name: "Zeraora", image: Zeraora, bgColor: "bg-[#29A5E3]" },
    { name: "Zoroark", image: Zoroark, bgColor: "bg-[#29A5E3]" },
  ];

  return (
    <div className="mt-10 mx-auto h-[540px] overflow-y-auto">
      <div className="grid grid-cols-7 gap-x-2 gap-y-0 justify-center max-w-[650px] mx-auto">
        {pokemons.map((p, i) => {
          const isDisabled = disabledNames?.has(p.name);
          const isBanned = bannedNames?.has(p.name);

          return (
            <div key={p.name} className={i >= 7 ? "mt-3" : ""}>
              <PokemonCard
                name={p.name}
                image={p.image}
                bgColor={p.bgColor}
                disabled={isDisabled}
                banned={isBanned}
                onClick={() => onPick?.({ name: p.name, image: p.image })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
