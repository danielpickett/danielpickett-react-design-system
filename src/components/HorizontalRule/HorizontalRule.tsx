import React from 'react'
import './HorizontalRule.scss'

export const HorizontalRule = ({
  color = 'grey',
}: {
  color?: 'primary' | 'secondary' | 'grey' | 'success' | 'warning' | 'danger'
}) => {
 const style = {
   backgroundColor: color === 'grey' ? 'var(--color-grey-200)' :`var(--color-${color})`
 }

  return <div className="HorizontalRule" style={style}></div>
}
