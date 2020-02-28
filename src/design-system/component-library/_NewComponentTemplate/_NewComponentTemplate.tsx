import React from 'react'
import './_NewComponentTemplate.css'

export const _NewComponentTemplate: React.FunctionComponent<{onClick: () => void}> = ({ children, onClick }) => {
  return (
    <div className="_NewComponentTemplate" onClick={onClick}>
      _NewComponentTemplate
    </div>
  )
}