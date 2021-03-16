import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const groupData = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="btnPanel">
      { groupData.map(group => (
        <div key={group} className="group">
          {
          group.map(btn => (
            <Button
              color={['x', '-', '+', '=', '÷'].includes(btn) ? 'orange' : 'button'}
              wide={btn === '0'}
              key={btn}
              btnName={`${btn}`}
              clickHandler={clickHandler}
            />
          ))
          }
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
