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
}

const toLocaleString = (num: any) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

const removeSpaces = (num: any) => num.toString().replace(/\s/g, '');

const ButtonBox: FC<ButtonBoxProps> = ({ calc, setCalc }) => {
  const numClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (String(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0,
    });
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(String(calc.num)) : 0;
    let res = calc.res ? parseFloat(String(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: '',
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === '+'
          ? a + b
          : sign === '-'
          ? a - b
          : sign === 'X'
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === 0 && calc.sign === '/'
            ? 0
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: '',
        num: 0,
      });
    }
  };

  const signClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const commaClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const clearCalcHandler = () => {};

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
            btn === 'AC'
              ? resetClickHandler
              : btn === '<-'
              ? clearCalcHandler
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
