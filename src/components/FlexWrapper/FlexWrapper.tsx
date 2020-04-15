import React, { ReactNode } from 'react'
import './FlexWrapper.scss'
import classNames from 'classnames'

export const FlexWrapper = ({
  children,
  centered = true,
  className,
}: {
  children: ReactNode
  centered?: boolean
  className?: string
}) => {
  if (Array.isArray(children)) {
    throw new Error('FlexWrapper component may not contain multiple children')
  }

  const wrapperClasses = classNames(' ', {
    'FlexWrapper--centered': centered,
  }, className)

  return <div className={'FlexWrapper' + wrapperClasses}>{children}</div>
}
