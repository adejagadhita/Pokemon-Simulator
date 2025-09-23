import bg from './assets/bg.png';
import Top from './top.jsx';
import Card from './card.jsx';
import ContenLeft from './contenLeft.jsx';
import ContenRight from './contenRight.jsx';
import Ban from './banButton.jsx';

//testt

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
        
        
        
        <div className="flex flex-row justify-between items-start px-10 pt-4 ">
     <div className="flex flex-col items-start gap-2 mt-10 ">
    <ContenLeft />
   
    <Ban position="left"/>
    
     </div>

<div className="flex flex-wrap justify-center gap-2">
        <Card />
        </div>

        <div className="flex flex-col items-end gap-2 mt-10 ">
    <ContenRight />
    <Ban position="right"/>
    
    
    
  </div>
  
</div> 

    </div>
    
  );
}

export default App;