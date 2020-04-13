import React, { ReactNode, MouseEvent } from 'react'
import './Button.scss'

export const Button = ({
  children,
  onClick,
}: {
  children?: ReactNode
  onClick?: (event: MouseEvent) => void
}) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  )
}
