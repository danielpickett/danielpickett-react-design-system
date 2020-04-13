import React, { ReactNode } from 'react'
import './Button.scss'

export const Button = ({
  children,
  onClick,
}: {
  children?: ReactNode
  onClick?: () => void
}) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  )
}
