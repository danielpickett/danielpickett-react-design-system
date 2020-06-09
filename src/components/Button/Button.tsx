import React, { FC, SVGAttributes } from 'react'
import './Button.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

interface Props extends SVGAttributes<SVGElement> {
  color?: string
  size?: string | number
}

type Icon = FC<Props>

type ButtonProps = {
  children?: string
  IconLeft?: Icon
  IconRight?: Icon
  onClick?: (event?: React.MouseEvent) => void
  className?: string
  rounded?: boolean
  type?: 'button' | 'submit' | 'reset'
  kind?: 'default' | 'primary' | 'danger' | 'text'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  width?: CSS.WidthProperty<0>
  style?: CSS.Properties
  disabled?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      IconLeft,
      IconRight,
      onClick,
      className,
      rounded = false,
      type = 'button',
      kind = 'default',
      size = 'medium',
      width,
      style,
      disabled = false,
    }: ButtonProps,
    ref,
  ) => {
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
        'Button--has-right-icon': !!IconRight,
        'Button--has-left-icon': !!IconLeft,
      },
      className,
    )

    const handleClick = (event: React.MouseEvent) => {
      if (onClick && !disabled) {
        onClick(event)
      }
    }

    const getStrokeWidth = (
      size: 'small' | 'medium' | 'large' | 'extra-large',
    ) => {
      return {
        small: `2.75`,
        medium: `2.3`,
        large: `2`,
        'extra-large': `2`,
      }[size]
    }

    const customStyle: CSS.Properties = { width: width, ...style }

    return (
      <button
        ref={ref}
        className={wrapperClasses}
        type={type}
        onClick={handleClick}
        disabled={disabled}
        style={customStyle}
      >
        {IconLeft ? (
          <div className="Button__icon-wrapper">
            <IconLeft
              className="Button__icon"
              size="1.25em"
              strokeWidth={getStrokeWidth(size)}
            />
          </div>
        ) : null}
        {children ? <span className="Button__text">{children}</span> : null}
        {IconRight ? (
          <div className="Button__icon-wrapper">
            <IconRight
              className="Button__icon"
              size="1.25em"
              strokeWidth={getStrokeWidth(size)}
            />
          </div>
        ) : null}
      </button>
    )
  },
)
