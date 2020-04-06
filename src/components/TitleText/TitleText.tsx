import React from 'react'
import './TitleText.scss'

export const TitleText: React.FunctionComponent<{ children: string }> = ({
  children,
}) => {
  return <div className="TitleText">{children}</div>
}
