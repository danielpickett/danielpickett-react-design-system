import React, { ReactNode, cloneElement, isValidElement } from 'react'
import './ButtonGroup.scss'

export const ButtonGroup = ({
  children,
  size,
  rounded,
  justify = 'end',
  kind
}: {
  children: ReactNode
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  rounded?: boolean
  justify?: 'start' | 'center' | 'end'
  kind?: 'default' | 'primary' | 'danger' | 'text'
}) => {
  const newProps = {
    size: size,
    kind: kind,
    rounded: rounded
  }


  return (
    <div
      className="ButtonGroup"
      style={{
        gridTemplateColumns: `repeat(${React.Children.count(
          children,
        )}, min-content)`,
        justifyContent: justify
      }}
    >
      {React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, newProps)
        }
      })}
    </div>
  )
}
