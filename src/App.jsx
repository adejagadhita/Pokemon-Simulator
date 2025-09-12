import { useState, useEffect } from "react";
import bg from './assets/bg.png';
import Top from './top.jsx';



function App() {


  return (
    <div>
      {/* Background */}
      <img
        className="bg-cover bg-center h-screen w-full absolute z-0 "
        src={bg}
        alt="Background"
      />

      
        <Top />
    </div>
    
  );
}

export default App;
