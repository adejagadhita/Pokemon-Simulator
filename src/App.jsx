import { useState, useEffect } from "react";
import bg from './assets/bg.png';
import originalWelcome from './assets/start btn.png';
import newWelcome from './assets/Vector.png';
import num1 from './assets/number/Number=11.png';
import num2 from './assets/number/Number=12.png';
import num3 from './assets/number/Number=13.png';
import num4 from './assets/number/Number=14.png';
import num5 from './assets/number/Number=15.png';
import num6 from './assets/number/Number=16.png';
import num7 from './assets/number/Number=17.png';
import num8 from './assets/number/Number=18.png';
import num9 from './assets/number/Number=19.png';
import num10 from './assets/number/Number=20.png';

function App() {
  // state countdown
  const [count, setCount] = useState(null); // null = belum mulai

  // array gambar angka
  const numbers = [
    num1, num2, num3, num4, num5,
    num6, num7, num8, num9, num10
  ];

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
      {/* Background */}
      <img
        className="bg-cover bg-center h-screen w-full absolute z-0 "
        src={bg}
        alt="Background"
      />

      {/* Tombol Start */}
      {count === null && (
        <div className="relative mx-auto w-fit ">
          <img
            className="cursor-pointer h-30"
            src={originalWelcome}
            alt="Start Button"

            onClick={() => {
              setCount(10);
              setWelcomeImg(newWelcome);
            }} // mulai countdown dari 10
          />
        </div>
      )}

      {/* Countdown */}
      {count !== null && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col  ">
          <div className="items-center justify-center flex flex-col ">
          <img src={newWelcome} alt="" className="relative  cursor-pointer h-20 w-115"/> 

          <img
            src={numbers[count - 1]} // -1 karena array dimulai index 0x`
            alt={`Number ${count}`}
            className="h-10 w-auto absolute top-15"
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
