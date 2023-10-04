import React from 'react';
import Input from '../fectures/input';
import dollar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';

export default function Left({ setTip, setPeople, setBill, bill, people, tip}) {
  const handleCustomTipChange = (event) => {
    var num = event.target.value;
      setTip(num === ''? 0 : parseFloat(num));
    };
    
  const handleBillChange = (event) => {
      const amount = event.target.value;
      setBill(amount === '' ? 0 : parseFloat(amount));
    };

  const handlePeopleChange = (event) => {
      const num = event.target.value;
      setPeople(num === '' ? 0 : parseFloat(num));
    };

  return (
    <div className='container__left'>
      <Input
        name='bill'
        image={dollar}
        onChange={handleBillChange}
        placeholder={bill} 
        value={bill !== 0 ? bill : ''}
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
            type="text"
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
        placeholder={people}
        value={people !== 0 ? people : ''}
      />
    </div>
  );
}
