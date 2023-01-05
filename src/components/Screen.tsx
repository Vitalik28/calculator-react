import React, { FC } from 'react';
interface ScreenProps {
  value: number;
}
const Screen: FC<ScreenProps> = ({ value }) => {
  return (
    <div className="screen">
      <p>{value}</p>
    </div>
  );
};

export default Screen;
