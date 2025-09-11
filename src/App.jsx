import { useState, useEffect } from "react";
import bg from './assets/bg.png';
import btnStart from './assets/start btn.png';
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

  return (
    <div>
      {/* Background */}
      <img
        className="bg-cover bg-center h-screen w-full absolute z-0"
        src={bg}
        alt="Background"
      />

      {/* Tombol Start */}
      {count === null && (
        <div className="relative mx-auto w-fit -top-5">
          <img
            className="cursor-pointer"
            src={btnStart}
            alt="Start Button"
            onClick={() => setCount(10)} // mulai countdown dari 10
          />
        </div>
      )}

      {/* Countdown */}
      {count !== null && (
        <div className="relative flex justify-center items-center h-screen">
          <img
            src={numbers[count - 1]} // -1 karena array dimulai index 0
            alt={`Number ${count}`}
            className="w-40 h-40 object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default App;
