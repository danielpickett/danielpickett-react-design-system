import React from 'react'
import './Button.scss'
import { Text } from '../../components'
import classNames from 'classnames'

export const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  primary = false,
  disabled = false,
}: {
  children: string | string[]
  onClick?: (event?: React.MouseEvent) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  primary?: boolean
  disabled?: boolean
}) => {
  const wrapperClasses = classNames(
    'Button',
    { 'Button--primary': primary },
    { 'Button--disabled': disabled },
    className,
  )

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className={wrapperClasses}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      <Text overDarkBackground span>{children}</Text>
    </button>
  )
}
