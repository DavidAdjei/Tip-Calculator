import React from 'react'
import Input from '../fectures/input'
import dollar from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'

export default function Left() {
  return (
    <div className='container__left'>
          <Input
              name='bill'
              image={dollar}
          />
           <div className="container__left--tip">
                <p>Select Tip %</p>
                <div className="tip__section">
                    <button>5%</button>
                    <button>10%</button>
                    <button>15%</button>
                    <button>25%</button>
                    <button>50%</button>
                    <input type="text" placeholder="Custom"/>
                </div>
            </div> 
          <Input
              name='Number of People'
              image={person}
          />
    </div>
  )
}
