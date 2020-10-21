import React, { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './Tooltip.scss'

type TooltipPropsType = {
  children: ReactNode
  content: ReactNode
}

export const Tooltip = ({ children, content }: TooltipPropsType) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const repositionTooltip = (_triggerNode: Element | null) => {
    if (_triggerNode) {
      const { x, y, height, width } = _triggerNode.getBoundingClientRect()
      const tooltipNode = tooltipRef.current
      if (tooltipNode) {
        const tooltipRect = tooltipNode.getBoundingClientRect()
        tooltipNode.style.top = y - tooltipRect.height + 'px'
        tooltipNode.style.left = x + 'px'

        // ------> add logic to center the tooltip over the trigger <--------
      }
    }
  }

  const observer = new ResizeObserver((entries) => {
    repositionTooltip(entries[0].target)
  })

  useEffect(() => {
    const triggerNode = triggerRef.current
    const callback = () => repositionTooltip(triggerNode)

    if (triggerNode) observer.observe(triggerNode)
    window.addEventListener('scroll', callback, true)
    window.addEventListener('resize', callback, true)

    return () => {
      if (triggerNode) observer.unobserve(triggerNode)
      window.removeEventListener('scroll', callback, true)
      window.removeEventListener('resize', callback, true)
    }
  })

  return (
    <>
      <div ref={triggerRef}>{children}</div>

      {createPortal(
        <div className="Tooltip" ref={tooltipRef}>
          {content}
        </div>,
        document.body,
      )}
    </>
  )
}
