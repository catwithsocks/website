import React, { useContext } from 'react';
import { ToggleContext } from '../ToggleStateContext';

const Backdrop = () => {
  const [navOpen, setNavOpen] = useContext(ToggleContext);

  return <div className="backdrop" onClick={() => (navOpen ? setNavOpen(false) : navOpen === false)} />;
};

export default Backdrop;
