import React from 'react';

const CheckboxOption = ({ name, category, addRequest, changeActive, active }) => {
  return (
    <button
      className={active ? 'filter-button filter-button-selected' : 'filter-button'}
      id={name}
      onClick={() => {
        addRequest(name, category, active);
        changeActive(name);
      }}
    >
      {name}
    </button>
  );
};

export default CheckboxOption;
