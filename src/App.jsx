//aku tambahin usememo dan usestate
import React, { useMemo, useState } from 'react';

import bg from './assets/bg.png';
import Top from './top.jsx';
import Card from './card.jsx';
import ContenLeft from './contenLeft.jsx';
import ContenRight from './contenRight.jsx';
import Ban from './banButton.jsx';

function App() {
  //aku tambahin leftpicks dll, liat ini d bwh
  const [leftPicks, setLeftPicks] = useState([null, null, null, null, null]);
  const [rightPicks, setRightPicks] = useState([null, null, null, null, null]);


  const [selectedSlot, setSelectedSlot] = useState(null);

  const [banLeft, setBanLeft] = useState(null);  
  const [banRight, setBanRight] = useState(null); 
  const [selectedBan, setSelectedBan] = useState(null); 
  const disabledNames = useMemo(() => {
    const names = [];
    leftPicks.forEach(p => p && names.push(p.name));
    rightPicks.forEach(p => p && names.push(p.name));
    if (banLeft) names.push(banLeft.name);
    if (banRight) names.push(banRight.name);
    return new Set(names);
  }, [leftPicks, rightPicks, banLeft, banRight]);

  const bannedNames = useMemo(() => {
    const names = [];
    if (banLeft) names.push(banLeft.name);
    if (banRight) names.push(banRight.name);
    return new Set(names);
  }, [banLeft, banRight]);

  function handlePick({ name, image }) {
    if (selectedBan) {
      if (selectedBan === 'left' && !banLeft) {
        setBanLeft({ name, image });
      } else if (selectedBan === 'right' && !banRight) {
        setBanRight({ name, image });
      }
      setSelectedBan(null);
      setSelectedSlot(null);
      return;
    }

    if (!selectedSlot) return;

    const { side, index } = selectedSlot;
    if (side === 'left') {
      setLeftPicks(prev => {
        if (prev[index]) return prev;
        const next = [...prev];
        next[index] = { name, image };
        return next;
      });
    } else {
      setRightPicks(prev => {
        if (prev[index]) return prev;
        const next = [...prev];
        next[index] = { name, image };
        return next;
      });
    }
    setSelectedSlot(null);
  }

  function handleSelectTrainer(side, index) {
    setSelectedBan(null);
    if (selectedSlot && selectedSlot.side === side && selectedSlot.index === index) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot({ side, index });
    }
  }

  function handleSelectBan(which) {
    setSelectedSlot(null);
    setSelectedBan(prev => (prev === which ? null : which));
  }
//smpe sini



//ini code mu yaa, gaada berubah, tp ak tambahin code untuk ngeclicknyaa 
  return (
    <div>
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
          <ContenLeft
          /* kaya yang d bwh ini ak tmbhin code ini biar bs d klik trainer kiriiinyaaa */
            picks={leftPicks}
            onSelectSlot={(i) => handleSelectTrainer('left', i)}
            selectedIndex={selectedSlot?.side === 'left' ? selectedSlot.index : -1}
          />

          <Ban
            position="left"
            //ban kiri ni jg ak tambahin
            selected={selectedBan === 'left'}
            pick={banLeft}
            onSelect={() => handleSelectBan('left')}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Card
          //ni jga
            onPick={handlePick}
            disabledNames={disabledNames}
            bannedNames={bannedNames}    
          />
        </div>

        <div className="flex flex-col items-end gap-2 mt-10 ">
          <ContenRight
          //ni trainer kanan sm ja ky yyg kiri
            picks={rightPicks}
            onSelectSlot={(i) => handleSelectTrainer('right', i)}
            selectedIndex={selectedSlot?.side === 'right' ? selectedSlot.index : -1}
          />
          <Ban
          //ni ban trainer kiri
            position="right"
            selected={selectedBan === 'right'}
            pick={banRight}
            onSelect={() => handleSelectBan('right')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;