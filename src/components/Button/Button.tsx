import React from 'react'
import './Button.scss'

export const Button: React.FunctionComponent<{onClick: () => void}> = ({ children, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      { children }
    </button>
  )
}