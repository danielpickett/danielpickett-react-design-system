import React, {
  ReactElement,
  cloneElement,
  useEffect,
  ReactNode,
  useRef,
  useCallback,
  // useState,
  // useCallback,
} from 'react'
import './Tooltip.scss'
import { createPortal } from 'react-dom'

export const Tooltip = ({
  trigger,
  content,
  isActive,
  deactivate,
  width,
}: {
  trigger: ReactElement
  content: ReactNode
  isActive: boolean
  deactivate: () => void
  width?: string
}) => {
  const triggerRef = useRef(null)
  const tooltipRef = useRef(null)

  // const measuredTooltipRef = useCallback()

  useEffect(() => {
    if (triggerRef != null) {
      console.dir(triggerRef.current)
      console.dir(tooltipRef.current)
    }
  })

  // useEffect for attaching scroll listeners to all parents
  useEffect(() => {
    const triggerNode = triggerRef.current

    const getScrollParent = (
      node: (Node & ParentNode) | null | undefined,
      callback: (node: Node) => void,
    ): (Node & ParentNode) | null => {
      if (!node) {
        return null
      }
      callback(node)
      return getScrollParent(node.parentNode, callback)
    }

    if (isActive) {
      getScrollParent(triggerNode, (node: Node) => {
        node.addEventListener('scroll', deactivate)
      })
    } else {
      getScrollParent(triggerNode, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }

    return () => {
      getScrollParent(triggerNode, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }
  })

  return (
    <>
      {cloneElement(trigger, { ref: triggerRef })}
      {isActive &&
        createPortal(
          <div ref={tooltipRef} className="Tooltip">
            <div className="Tooltip__content">
              <p></p>
              <p>{content}</p>
            </div>
            <div className="Tooltip__arrow" />
          </div>,
          document.body,
        )}
    </>
  )
}
