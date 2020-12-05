import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import './Tooltip.scss'
import { repositionTooltip } from './repositionTooltip'

type PositionType = 'top' | 'bottom' | 'left' | 'right'

type TooltipPropsType = {
  children: ReactElement
  content: ReactNode
  position?: PositionType[]
}

export const Tooltip = ({ children, content, position }: TooltipPropsType) => {
  const triggerRef = useRef<HTMLElement | SVGElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipBodyRef = useRef<HTMLDivElement>(null)
  const tooltipArrowRef = useRef<HTMLDivElement>(null)

  const paddingInPixels = 2 // pixels
  const arrowSizeInRems = 0.5 // rems

  const defaultPositions = ['top', 'left', 'right', 'bottom'] as PositionType[]

  const configuredPositions: PositionType[] = []

  if (!position) {
    configuredPositions.push(...defaultPositions)
  } else {
  }

  const resizeObserver = new ResizeObserver(() => {
    repositionTooltip(
      triggerRef.current,
      tooltipRef.current,
      tooltipBodyRef.current,
      tooltipArrowRef.current,
      paddingInPixels,
      arrowSizeInRems,
    )
  })

  const mutationObserverConfig = {
    attributes: true,
    childList: true,
    subtree: true,
  }
  const mutationObserverCallback = (mutationsList: MutationRecord[]) => {
    mutationsList.forEach((mutation) => {
      if (
        !(
          (mutation.target instanceof HTMLElement ||
            mutation.target instanceof SVGElement) &&
          (mutation.target.classList.contains('Tooltip') ||
            mutation.target.classList.contains('Tooltip__body'))
        )
      ) {
        repositionTooltip(
          triggerRef.current,
          tooltipRef.current,
          tooltipBodyRef.current,
          tooltipArrowRef.current,
          paddingInPixels,
          arrowSizeInRems,
        )
      }
    })
  }
  const mutationObserver = new MutationObserver(mutationObserverCallback)

  useEffect(() => {
    const triggerNode = triggerRef.current
    const tooltipNode = tooltipRef.current
    const tooltipBodyNode = tooltipBodyRef.current

    const eventListenerCallback = () => {
      repositionTooltip(
        triggerNode,
        tooltipNode,
        tooltipBodyNode,
        tooltipArrowRef.current,
        paddingInPixels,
        arrowSizeInRems,
      )
    }

    window.addEventListener('scroll', eventListenerCallback, true)
    window.addEventListener('resize', eventListenerCallback, true)
    mutationObserver.observe(document, mutationObserverConfig)
    if (triggerNode) resizeObserver.observe(triggerNode)
    if (tooltipNode) resizeObserver.observe(tooltipNode)

    return () => {
      window.removeEventListener('scroll', eventListenerCallback, true)
      window.removeEventListener('resize', eventListenerCallback, true)
      mutationObserver.disconnect()
      if (triggerNode) resizeObserver.unobserve(triggerNode)
      if (tooltipNode) resizeObserver.unobserve(tooltipNode)
    }
  })

  return (
    <>
      {cloneElement(children, { ref: triggerRef })}

      {createPortal(
        <div className="Tooltip" ref={tooltipRef}>
          <div className="Tooltip__arrow" ref={tooltipArrowRef} />
          <div
            className="Tooltip__body"
            style={{ maxWidth: `calc(100vw - ${paddingInPixels * 2}px)` }}
            ref={tooltipBodyRef}
          >
            {content}
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
