import React, { FC } from 'react';
interface ScreenProps {
  value: number;
  allCalc: string;
}
const Screen: FC<ScreenProps> = ({ value, allCalc }) => {
  return (
    <div className="screen">
      <p>{allCalc}</p>
      <p>{value}</p>
    </div>
  );
};

export default Screen;
