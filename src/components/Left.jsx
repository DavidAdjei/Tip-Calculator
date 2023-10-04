import React from 'react';
import Input from '../fectures/input';
import dollar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';

export default function Left({ setTip, setPeople, setBill, bill, people, tip}) {
  const handleCustomTipChange = (event) => {
    var num = event.target.value;
      setTip(num === ''? '' : parseFloat(num));
    };
    
  const handleBillChange = (event) => {
      const amount = event.target.value;
      setBill(amount === '' ? '' : parseFloat(amount));
    };

  const handlePeopleChange = (event) => {
      const num = event.target.value;
      setPeople(num === '' ? '' : parseFloat(num));
    };

  return (
    <div className='container__left'>
      <Input
        name='bill'
        image={dollar}
        onChange={handleBillChange}
        placeholder={0} 
        value={bill}
      />
      <div className="container__left--tip">
        <p className='label'>Select Tip %</p>
        <div className="tip__section">
          <button
            className={`tip__button ${tip === 5 ? 'active' : ''}`}
            onClick={() => setTip(5)}>5%</button>
          <button
            className={`tip__button ${tip === 10 ? 'active' : ''}`}
            onClick={() => setTip(10)}>10%</button>
          <button
            className={`tip__button ${tip === 15 ? 'active' : ''}`}
            onClick={() => setTip(15)}>15%</button>
          <button
            className={`tip__button ${tip === 25 ? 'active' : ''}`}
            onClick={() => setTip(25)}>25%</button>
          <button
            className={`tip__button ${tip === 50 ? 'active' : ''}`}
            onClick={() => setTip(50)}>50%</button>
          <input
            type="number"
            placeholder="Custom"
            onChange={handleCustomTipChange}
            value={tip !== 0 ? tip : ''}
          />
        </div>
      </div>
      <Input
        name='Number of People'
        image={person}
        onChange={handlePeopleChange}
        placeholder={0}
        value={people}
      />
    </div>
  );
}
