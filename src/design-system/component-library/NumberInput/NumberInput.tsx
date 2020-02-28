import React from 'react'
import './NumberInput.css'

export const NumberInput: React.FunctionComponent<{onClick?: () => void}> = ({ onClick }) => {
  return (
    <div className="NumberInput" onClick={onClick}>
      This is just a template. It won't do you any good by itself.
    </div>
  )
}