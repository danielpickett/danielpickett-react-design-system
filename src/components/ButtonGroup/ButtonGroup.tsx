import React, { ReactNode, cloneElement, isValidElement } from 'react'
import './ButtonGroup.scss'
import classNames from 'classnames'
import * as CSS from 'csstype'

export const ButtonGroup = ({
  children,
  justify = 'end',
  className,
  style,

  size,
  rounded,
  kind,
}: {
  children: ReactNode
  justify?: 'start' | 'center' | 'end'
  className?: string
  style?: CSS.Properties

  size?: 'small' | 'medium' | 'large' | 'extra-large'
  rounded?: boolean
  kind?: 'default' | 'primary' | 'danger' | 'text'
}) => {
  const getNewProps = (child: ReactNode) => {
    const newProps: {
      size?: 'small' | 'medium' | 'large' | 'extra-large'
      kind?: 'default' | 'primary' | 'danger' | 'text'
      rounded?: boolean
    } = {}

    if (
      child &&
      isValidElement(child) &&
      child.props.type &&
      child.props.type.displayName === 'Button'
    ) {
      if (
        child &&
        isValidElement(child) &&
        !child.props.hasOwnPropery('size')
      ) {
        newProps.size = size
      }
      if (
        child &&
        isValidElement(child) &&
        !child.props.hasOwnPropery('rounded')
      ) {
        newProps.rounded = rounded
      }
      if (
        child &&
        isValidElement(child) &&
        !child.props.hasOwnPropery('kind')
      ) {
        newProps.kind = kind
      }
    }
    return newProps
  }

  const wrapperClasses = classNames('ButtonGroup', className)

  return (
    <div
      className={wrapperClasses}
      style={{
        ...style,
        gridTemplateColumns: `repeat(${React.Children.count(
          children,
        )}, min-content)`,
        justifyContent: justify,
      }}
    >
      {React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, getNewProps(child))
        }
      })}
    </div>
  )
}
