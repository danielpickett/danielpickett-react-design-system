import React from 'react'
import './Button.css'

export const Button: React.FunctionComponent = ({ children }) => {
  return (
    <button className="Button">
      { children }
    </button>
  )
}