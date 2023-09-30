import React from 'react';
import Input from '../fectures/input';
import dollar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';

export default function Left({ setTip, setPeople, setBill, bill, people, tip}) {
  const handleCustomTipChange = (event) => {
      setTip(parseFloat(event.target.value));
      console.log(tip)
    };
    
    const handleBillChange = (event) => {
        const amount = event.target.value;
        amount === '' ? setBill(0) :
        setBill(parseFloat(amount))
        console.log(bill)
    }

    const handlePeopleChange = (event) => {
        const num = event.target.value;
        num === '' ? setPeople(0) :
        setPeople(parseFloat(num))
        console.log(people)
    }

  return (
    <div className='container__left'>
      <Input
        name='bill'
        image={dollar}
        onChange={handleBillChange}
        placeholder = {bill} 
      />
      <div className="container__left--tip">
        <p>Select Tip %</p>
        <div className="tip__section">
          <button onClick={() => setTip(5)}>5%</button>
          <button onClick={() => setTip(10)}>10%</button>
          <button onClick={() => setTip(15)}>15%</button>
          <button onClick={() => setTip(25)}>25%</button>
          <button onClick={() => setTip(50)}>50%</button>
          <input
            type="text"
            placeholder="Custom"
            onChange={handleCustomTipChange}
          />
        </div>
      </div>
      <Input
        name='Number of People'
        image={person}
        onChange={handlePeopleChange}
        placeholder = {people}
      />
    </div>
  );
}
