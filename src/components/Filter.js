import React from 'react';

function Filter () {

  return (
    <div className="filter-wrapper">
      <h1>Подобрать урок</h1>
      <div>
        <div className="filter-section">
          <h2>Предмет</h2>
          <div className="options-wrapper">
            <div className="filter-button filter-button-selected" {...{"selected":"true"}}><span>Английский</span></div>
            <div className="filter-button"><span>Белорусский</span></div>
            <div className="filter-button"><span>Русский</span></div>
            <div className="filter-button"><span>Математика</span></div>
            <div className="filter-button"><span>Физика</span></div>
          </div>  
        </div>
        <div className="filter-section">
          <h2>Класс</h2>
          <div className="options-wrapper">
            <div className="filter-button"><span>5</span></div>
            <div className="filter-button"><span>6</span></div>
            <div className="filter-button"><span>7</span></div>
            <div className="filter-button filter-button-selected"><span>8</span></div>
            <div className="filter-button"><span>9</span></div>
            <div className="filter-button"><span>10</span></div>
            <div className="filter-button"><span>11</span></div>
          </div>  
        </div>
        <div className="filter-section">
          <h2>Удобное время</h2>
          <div className="options-wrapper">
            <div className="filter-button"><span>9:00 - 13:00</span></div>
            <div className="filter-button filter-button-selected"><span>13:00 - 17:00</span></div>
            <div className="filter-button"><span>17:00 - 22:00</span></div>
          </div>  
        </div>
        <div className="request-button"><span>Оставить заявку →</span></div>
      </div>
    </div>
  );
}

export default Filter;