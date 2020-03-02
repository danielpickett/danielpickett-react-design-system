import React from 'react'
import './NumberInput.css'

export const NumberInput: React.FunctionComponent<{onClick?: () => void, value?: number}> = ({ onClick }) => {
  return (
    <div className="NumberInput" onClick={onClick}>
      <input type="number" className="NumberInput__input"/>
    </div>
  )
}