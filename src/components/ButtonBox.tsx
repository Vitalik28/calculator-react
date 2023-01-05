import React, { ButtonHTMLAttributes } from 'react';
import Button from './Button';

const btnValues = [
  ['AC', '<-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['+-', 0, '.', '='],
];

const ButtonBox = () => {
  const buttonValue = (e: any) => {
    const value = e.target.innerHTML;
    console.log(e.target.innertext);
  };
  return (
    <div
      className="button-box"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => console.log()}
    >
      {btnValues.flat().map((btn, index) => (
        <Button
          key={index}
          value={btn}
          className={
            btn === '=' ||
            btn === 'AC' ||
            btn === '<-' ||
            btn === '%' ||
            btn === '/' ||
            btn === '-' ||
            btn === '+' ||
            btn === 'X'
              ? 'equals'
              : 'btn'
          }
          onClick={buttonValue}
        />
      ))}
    </div>
  );
};

export default ButtonBox;
