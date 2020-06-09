import React, { MouseEvent, useEffect, CSSProperties, FC } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import './Modal.scss'

type ModalProps = {
  offClick?: () => void
  noBackground?: boolean
  className?: string
  style?: CSSProperties
}

export const Modal: FC<ModalProps> = ({
  offClick,
  children,
  noBackground = false,
  className,
  style = {},
}) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
    return () => {
      window.document.body.style.overflow = 'auto'
    }
  }, [])

  return createPortal(
    <div
      className={classNames('Modal', {
        'Modal--has-no-background': noBackground,
      })}
      onClick={offClick}
    >
      <div
        className={classNames('Modal__content', className)}
        onClick={handleClick}
        style={style}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}
