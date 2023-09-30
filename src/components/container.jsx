import React from 'react'
import Left from './Left'
import Right from './Right'

export default function Container({setBill, setTip, setPeople, bill, people, tip, tipAmount, total, reset}) {
  return (
    <div className='container'>
        <Left
              setBill={setBill}
              setTip={setTip}
              setPeople={setPeople}
              bill={bill}
              people={people}
              tip={tip}
        />
        <Right 
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
