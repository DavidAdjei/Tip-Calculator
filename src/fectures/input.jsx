import React from 'react'

export default function Input({name, image}) {
  return (
    <div className='container__left--input'>
          <p className='label'>{name}</p>
          <div className='input__section'>
              <div className='image__container'>
                  <img src={image} alt={name} />
              </div>
              <input type="text" name={name} className='inputField'/>
          </div>
    </div>
  )
}
