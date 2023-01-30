import React from 'react';
import img_arrow from '../assets/arrow.svg';
import Button from 'react-bootstrap/Button';

const SendRequestAddGroup = ({ action }) => {
  return (
    <div
      className='request-button__add'
      onClick={() => {
        action();
      }}
    >
      <span>Добавиться в группу</span>
      <img className='arrow-icon' src={img_arrow} alt='' />
    </div>
  );
};

export default SendRequestAddGroup;
