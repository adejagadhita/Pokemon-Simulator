import { useState, useEffect } from "react";
import originalWelcome from './assets/Vector.png';
import newWelcome from './assets/Vector (1).png';
import btn1 from './assets/isHover=False.png';
import btn2 from './assets/isHover=True.png';



function Top() {
  // state countdown
  const [count, setCount] = useState(null); // null = belum mulai

  // array gambar angka
  

  // efek hitung mundur
  useEffect(() => {
    if (count !== null && count > 1) {
      const timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count]);

  const [welcomeImg, setWelcomeImg] = useState(originalWelcome);

  return (
    <div>
     

      {/* Tombol Start */}
      {count === null && (
        <div className="relative mx-auto w-fit ">
          <img
            className=" h-20 w-115 "
            src={originalWelcome}
            alt="Start Button"
            />

 <p className="font-sans absolute text-[24px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">Welcome to Draft Simulator!</p>
            
            
            <button className="text-white font-sans font-semibold cursor-pointer bg-[#FB7823] h-15 w-40 rounded-[30px] absolute top-22 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-[#AF4417]"

            onClick={() => {
              setCount(20);
              setWelcomeImg(newWelcome);
            }} >
                Start Draft
            </button>
            
            
          

         

          
        </div>
      )}

      {/* Countdown */}
      {count !== null && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col  ">
          <div className="items-center justify-center flex flex-col ">
          <img src={newWelcome} alt="" className="relative   h-20 w-115"/> 

          <p className="text-[#220A3D] text-[24px] absolute font-sans">Purple team choosing</p>

         <p className="text-[#FB7823] font-[1000] text-[60px] top-8 absolute text-shadow-[2px_2px_0_#fff,-1px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff] cursor-pointer">{count}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Top;
