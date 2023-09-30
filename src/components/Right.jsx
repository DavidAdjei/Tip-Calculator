import React from 'react'

export default function Right() {
  return (
        <div className="container__right">
            <div className="container__right--items">
                <div className="container__right--tip">
                    <p>Tip Amount <span>/person</span></p>
                    <h1>---</h1>
                </div>
                <div className="container__right--total">
                        <p >Total <span>/person</span></p>
                    <h1>---</h1>
                </div>
            </div>
            <button className="reset">RESET</button>
        </div>
  )
}
