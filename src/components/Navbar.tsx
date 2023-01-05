import React, { FC } from 'react';
import * as Icon from 'react-bootstrap-icons';
interface NavbarProps {
  isLight: boolean;
  setIsLight: (bol: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ isLight, setIsLight }) => {
  return (
    <div className="navbar">
      {isLight ? (
        <div className="navbar-icon" onClick={() => setIsLight(false)}>
          <Icon.BrightnessLow size={30} />
        </div>
      ) : (
        <div className="navbar-icon" onClick={() => setIsLight(true)}>
          <Icon.MoonFill size={20} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
