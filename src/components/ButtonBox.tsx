import React, { ButtonHTMLAttributes, FC } from 'react';
import Button from './Button';

const btnValues = [
  ['AC', '<-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  ['+-', 0, '.', '='],
];
interface ICalc {
  sign: string;
  num: number;
  res: number;
}
interface ButtonBoxProps {
  calc: ICalc;
  setCalc: (calc: ICalc) => void;
  allCalc: string;
  setAllCalc: (str: string) => void;
}
const ButtonBox: FC<ButtonBoxProps> = ({
  calc,
  setAllCalc,
  allCalc,
  setCalc,
}) => {
  const numClickHandler = (e: any) => {};

  const resetClickHandler = () => {};

  const invertClickHandler = () => {};

  const percentClickHandler = () => {}

  const equalsClickHandler = () => {}
  
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
          onClick={
            btn === 'C'
              ? resetClickHandler
              : btn === '+-'
              ? invertClickHandler
              : btn === '%'
              ? percentClickHandler
              : btn === '='
              ? equalsClickHandler
              : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
              ? signClickHandler
              : btn === '.'
              ? commaClickHandler
              : numClickHandler
          }
        />
      ))}
    </div>
  );
};

export default ButtonBox;
