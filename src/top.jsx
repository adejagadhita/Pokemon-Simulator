import { useState, useEffect } from "react";
import originalWelcome from "./assets/Vector.png";
import PurpleWelcome from "./assets/Vector (1).png";
import OrangeWelcome from "./assets/vector (2).png";

function Top() {
  const [count, setCount] = useState(null);
  const [turn, setTurn] = useState("purple");

  useEffect(() => {
    if (count !== null && count > 0) {
      const timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (count === 0) {
      setCount(null);

      setTurn((prev) => (prev === "purple" ? "orange" : "purple"));
    }
  }, [count]);

  const [welcomeImg, setWelcomeImg] = useState(originalWelcome);

  return (
    <div className="">
      {/* Tombol Start */}
      {count === null && (
        <div className="relative mx-auto w-fit ">
          <img
            className=" h-20 w-115 "
            src={originalWelcome}
            alt="Start Button"
          />

          <p className="font-sans absolute text-[24px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            Welcome to Draft Simulator!
          </p>

          <button
            className="text-white font-sans font-semibold cursor-pointer bg-[#FB7823] h-15 w-40 rounded-[30px] absolute top-22 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-[#AF4417] "
            onClick={() => {
              setCount(20);
              setWelcomeImg(turn === "purple" ? PurpleWelcome : OrangeWelcome);
            }}
          >
            {turn === "purple" ? "Start Draft" : "Start Draft"}
          </button>
        </div>
      )}
      
    
      {count !== null && (
        <div className="relative top-0 left-1/2 -translate-x-1/2 z-50  ">
          <div className="items-center justify-center flex flex-col ">
            <img
              src={turn === "purple" ? PurpleWelcome : OrangeWelcome}
              alt=""
              className="relative   h-20 w-115"
            />

            <p className="text-[#220A3D] text-[24px] absolute font-sans">
              {turn === "purple"
                ? "Purpple team choosing"
                : " Orange team choosing"}
            </p>

            <p className="text-[#FB7823] font-[1000] text-[60px] top-8 absolute text-shadow-[2px_2px_0_#fff,-1px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff] cursor-pointer">
              {count}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Top;
