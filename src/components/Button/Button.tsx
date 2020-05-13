import React, { FC, SVGAttributes } from 'react'
import './Button.scss'
import classNames from 'classnames'

interface Props extends SVGAttributes<SVGElement> {
  color?: string
  size?: string | number
}

type Icon = FC<Props>

export const Button = ({
  children,
  IconLeft,
  IconRight,
  onClick,
  className,
  rounded = false,
  type = 'button',
  kind = 'default',
  size = 'medium',
  disabled = false,
}: {
  children?: string
  IconLeft?: Icon
  IconRight?: Icon
  onClick?: (event?: React.MouseEvent) => void
  className?: string
  rounded?: boolean
  type?: 'button' | 'submit' | 'reset'
  kind?: 'default' | 'primary' | 'danger' | 'text'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  disabled?: boolean
}) => {
  const sizeClass = ` Button--${size}-size`

  const wrapperClasses = classNames(
    'Button',
    sizeClass,
    {
      'Button--default': kind === 'default',
      'Button--primary': kind === 'primary',
      'Button--danger': kind === 'danger',
      'Button--text': kind === 'text',
      'Button--disabled': disabled,
      'Button--rounded': rounded,
    },
    className,
  )

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event)
    }
  }

  var calcStrokeWidth = (
    size: 'small' | 'medium' | 'large' | 'extra-large',
  ) => {
    return {
      small: `2.75`,
      medium: `2.3`,
      large: `2`,
      'extra-large': `2`,
    }[size]
  }

  return (
    <button
      className={wrapperClasses}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {IconLeft ? (
        <IconLeft className="Button__icon" size="1.25em" strokeWidth={calcStrokeWidth(size)} />
      ) : null}
      {children ? <span className="Button__text">{children}</span> : null}
      {IconRight ? (
        <IconRight className="Button__icon" size="1.25em" strokeWidth={calcStrokeWidth(size)} />
      ) : null}
    </button>
  )
}
