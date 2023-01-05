import React, { FC } from 'react';

interface ButtonProps {
  value: string | number;
  className: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ value, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {value}
    </button>
  );
};

export default Button;
