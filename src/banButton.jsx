import React from "react";
import Ban from './assets/BanCard.png';
import iconBan from "./assets/IconBan.png";

function BanCard({ position, pokemon }) {
  return (
    <div 
    className={`
    ${position === "left" ? "left-13 top-10" : "right-13 top-10"} absolute`}>
    
      <img src={Ban}
       alt=""
       className="w-full h-full object-contain" />

       {pokemon && (
        <>
        <img src={pokemon.image} 
        alt=""
        className="absolute inset-0  object-cover rounded-lg" />
        

        <img src={iconBan}
         alt=""
         className="absolute bottom-0 right-0 left-12  w-5 h-5" />
         </>
       )}
    </div>
  );
}


export default BanCard;
