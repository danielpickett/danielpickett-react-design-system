import React, { ChangeEvent } from 'react'
import './TextArea.scss'
import classNames from 'classnames'

export const TextArea = ({
  onChange,
  className,
  value,
}: {
  onChange: (value: string, event: ChangeEvent) => void
  className?: string
  value: string | undefined
}) => {
  const wrapperClasses = classNames('TextArea', className)
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value, event)
  }
  return (
    <textarea
      className={wrapperClasses}
      onChange={handleChange}
      value={value}
    />
  )
}
