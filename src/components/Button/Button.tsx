import React, { useState } from 'react'
import './Button.scss'
import { Text } from '../../components'
import classNames from 'classnames'

export const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  kind = 'default',
  disabled = false,
}: {
  children: string | string[]
  onClick?: (event?: React.MouseEvent) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  kind?: 'default' | 'primary' | 'danger'
  disabled?: boolean
}) => {
  const [hover, setHover] = useState(false)
  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.type === 'mouseenter') {
     setHover(true) 
    }
    if (event.type === 'mouseleave') {
      setHover(false) 
    }
  }

  const wrapperClasses = classNames(
    'Button',
    {
      'Button--default': kind === 'default',
      'Button--primary': kind === 'primary',
      'Button--danger': kind === 'danger',
      'Button--disabled': disabled,
      'Button--hover': hover,
    },
    className,
  )

  const getTextColor = () => {
    if (kind === 'default' && !hover) return 'grey'
    if (kind === 'default' && hover) return 'primary'
    if (kind === 'primary' && !hover) return 'primary'
  }

  const getOverDarkBackground = () => {
    return (kind === 'primary' || kind === 'danger')
  }


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
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Text span overDarkBackground={getOverDarkBackground()} color={getTextColor()} >
        {children}
      </Text>
    </button>
  )
}
