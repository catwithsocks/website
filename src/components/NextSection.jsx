import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const NextSection = ({ name }) => {
  return (
    <div className="next-section">
      <div>
        <h6>{name}</h6>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};
export default NextSection;
