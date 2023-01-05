import React, { FC, useState } from 'react';
import ButtonBox from './ButtonBox';
import Navbar from './Navbar';
import Screen from './Screen';

const Wrapper: FC = () => {
  const [isLight, setIsLight] = useState(true);
  const [calc, setCalc] = useState({ sign: '', num: 0, res: 0 });
  const [allCalc, setAllCalc] = useState('');
  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: isLight ? 'white' : 'darkgray',
      }}
    >
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <Screen value={calc.num ? calc.num : calc.res} allCalc={allCalc} />
      <ButtonBox
        calc={calc}
        setCalc={setCalc}
        allCalc={allCalc}
        setAllCalc={setAllCalc}
      />
    </div>
  );
};

export default Wrapper;
