import React, { useState, useEffect } from 'react';
import Container from './components/container';

export default function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0.00);
  const [total, setTotal] = useState(0.00); 

  useEffect(() => {
    if (bill === 0 || people === 0 || tip === 0) {
      setTipAmount(0.00); 
      setTotal(0.00); 
    } else {
      const calcTipAmount = (bill * (tip / 100)) / people;
      const calcTotal = (bill / people) + calcTipAmount;

      setTipAmount(parseFloat(calcTipAmount.toFixed(2))); 
      setTotal(calcTotal.toFixed(2)); 
    }
  }, [bill, people, tip]);

  const reset = () => {
    setBill(0)
    setPeople(0)
    setTip(0)
    setTipAmount(0.00)
    setTotal(0.00)
  }

  return (
    <div className='body'>
      <div className='title'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Container
        setBill={setBill}
        setPeople={setPeople}
        setTip={setTip}
        bill={bill}
        people={people}
        tip={tip}
        tipAmount={tipAmount}
        total={total}
        reset = {reset}
      />
    </div>
  )
}
