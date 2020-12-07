import React from 'react'
import './Button.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

type ButtonProps = {
  children?: string
  IconLeft?: JSX.Element
  IconRight?: JSX.Element
  onClick?: (event?: React.MouseEvent) => void
  className?: string
  rounded?: boolean
  type?: 'button' | 'submit' | 'reset'
  kind?: 'default' | 'primary' | 'danger' | 'text'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  width?: CSS.WidthProperty<0>
  style?: CSS.Properties
  disabled?: boolean
  onMouseOver?: (event?: React.MouseEvent) => void
  onMouseOut?: (event?: React.MouseEvent) => void
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
      onMouseOver,
      onMouseOut,
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

    const handleMouseOver = (event: React.MouseEvent) => {
      if (onMouseOver) {
        onMouseOver(event)
      }
    }
    const handleMouseOut = (event: React.MouseEvent) => {
      if (onMouseOut) {
        onMouseOut(event)
      }
    }

    const handleClick = (event: React.MouseEvent) => {
      if (onClick && !disabled) {
        onClick(event)
      }
    }

    const customStyle: CSS.Properties = { width: width, ...style }

    const RenderIcon = ({ icon }: { icon: JSX.Element }) => icon

    return (
      <button
        ref={ref}
        className={wrapperClasses}
        type={type}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        disabled={disabled}
        style={customStyle}
      >
        {IconLeft ? (
          <div className="Button__icon-wrapper">
            <RenderIcon icon={IconLeft} />
          </div>
        ) : null}
        {children ? <span className="Button__text">{children}</span> : null}
        {IconRight ? (
          <div className="Button__icon-wrapper">
            <RenderIcon icon={IconRight} />
          </div>
        ) : null}
      </button>
    )
  },
)
