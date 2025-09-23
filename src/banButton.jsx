import Ban from './assets/BanCard.png';
function BanCard({position = "left"}) {
    return(
    <div className={`
    cursor-pointer absolute top-10 z-10 top-15
    ${position === "left" ? "left-13" : "" }
    ${position === "right" ? "right-13" : ""}
    `}>

        <img 
        src={Ban}
         alt="Ban Img"
         className='' />

    </div>

    )
}

export default BanCard;