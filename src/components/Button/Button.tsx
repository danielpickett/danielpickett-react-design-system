import React from 'react'
import './Button.css'

export const Button: React.FunctionComponent<{onClick: () => void}> = ({ children, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      { children }
    </button>
  )
}