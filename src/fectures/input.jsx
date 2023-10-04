import React from 'react'
import './fectures.css'

export default function Input({ name, image, onChange, placeholder, value }) {
  

  return (
    <div className='container__left--input'>
          <div className='label__container'>
        <p className='label'>{name}</p>
        <p className={`${value === 0 ? 'error' : 'hide'} `}>Can't be zero</p>
          </div>
          <div className={`input__section`}>
              <div className='image__container'>
                  <img src={image} alt={name} />
              </div>
              <input
                  type="number"
                  name={name}
                  className={`${value === 0 ? 'zero' : 'inputField'}`}
                  value= {value}
                  onChange={onChange}
                  placeholder={placeholder}
              />
          </div>
    </div>
  )
}
