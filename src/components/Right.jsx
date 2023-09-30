import React from 'react';

export default function Right({ tipAmount, total, bill, people, tip, reset }) {
  return (
    <div className="container__right">
      <div className="container__right--items">
        <div className="container__right--tip">
          <p>Tip Amount <span>/person</span></p>
          <h1>{tipAmount}</h1>
        </div>
        <div className="container__right--total">
          <p>Total <span>/person</span></p>
          <h1>{total}</h1>
        </div>
      </div>
      <button disabled={bill === 0 || people === 0 || tip === 0} 
        className="reset" 
        onClick={reset}>
        RESET
      </button>
    </div>
  );
}