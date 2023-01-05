import React, { FC, useState } from 'react';
import ButtonBox from './ButtonBox';
import Navbar from './Navbar';
import Screen from './Screen';

const Wrapper: FC = () => {
  const [isLight, setIsLight] = useState(true);
  const [calc, setCalc] = useState({ sign: '', num: 0, res: 0 });

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: isLight ? 'white' : 'darkgray',
      }}
    >
      <Navbar isLight={isLight} setIsLight={setIsLight} />
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox calc={calc} setCalc={setCalc} />
    </div>
  );
};

export default Wrapper;
