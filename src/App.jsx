import bg from './assets/bg.png';
import Top from './top.jsx';
import Card from './card.jsx';
import ContenLeft from './contenLeft.jsx';
import ContenRight from './contenRight.jsx';



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

      <div className="">
        <Card />
        </div>
        

    </div>
    
  );
}

export default App;