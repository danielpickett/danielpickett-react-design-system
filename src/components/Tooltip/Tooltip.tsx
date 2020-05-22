import React, {
  ReactElement,
  cloneElement,
  useEffect,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import './Tooltip.scss'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

export const Tooltip = ({
  trigger,
  tooltipContent,
  isActive,
  deactivate,
  closeOnClickOutside,
  width,
  className,
}: {
  trigger: ReactElement
  tooltipContent: ReactNode
  isActive: boolean
  deactivate: () => void
  closeOnClickOutside?: boolean
  width?: string
  className?: string
}) => {
  const [tooltipElement, setTooltipElement] = useState<Element>()
  const tooltipRef = useCallback((node) => {
    if (node !== null) {
      setTooltipElement(node)
    }
  }, [])

  const [triggerElement, setTriggerElement] = useState<Element>()
  const triggerRef = useCallback((node) => {
    if (node !== null) {
      setTriggerElement(node)
    }
  }, [])

  // useEffect for attaching scroll listeners to all parents
  useEffect(() => {
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

    const handleScroll = (e: Event) => {
      e.stopPropagation()
      deactivate()
    }

    if (isActive) {
      getScrollParent(triggerElement, (node: Node) => {
        node.addEventListener('scroll', handleScroll)
      })
    } else {
      getScrollParent(triggerElement, (node: Node) => {
        node.removeEventListener('scroll', handleScroll)
      })
    }

    return () => {
      getScrollParent(triggerElement, (node: Node) => {
        node.removeEventListener('scroll', handleScroll)
      })
    }
  })

  // useEffect for click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !tooltipElement ||
        !triggerElement ||
        tooltipElement.contains(event.target as Node) ||
        triggerElement.contains(event.target as Node)
      ) {
        return
      } else {
        deactivate()
      }
    }
    if (closeOnClickOutside) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      if (closeOnClickOutside) {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  })

  const getTooltipPos = (() => {
    const triggerRect = triggerElement?.getBoundingClientRect()
    const tooltipRect = tooltipElement?.getBoundingClientRect()
    const docRect = document.documentElement.getBoundingClientRect()
    const padding = 25

    if (tooltipRect === undefined || triggerRect === undefined) {
      return undefined
    }

    let left = Math.round(
      triggerRect.x + triggerRect.width / 2 - tooltipRect.width / 2,
    )

    let top =
      triggerRect.y - tooltipRect.height < padding
        ? Math.round(triggerRect.y + triggerRect.height)
        : Math.round(triggerRect.y - tooltipRect.height)

    let openBelow = triggerRect.y - tooltipRect.height < padding

    let offset = (() => {
      if (left < docRect.left) return Math.abs(left) + docRect.left + padding
      if (left < docRect.left + padding) return docRect.left + padding - left
      if (left + tooltipRect.width > docRect.width) {
        return (left + tooltipRect.width - docRect.width + padding) * -1
      }
      return undefined
    })()

    return {
      left: left,
      top: top,
      offset: offset,
      openBelow: openBelow,
    }
  })()

  const wrapperClasses = classNames('Tooltip', className)

  return (
    <>
      {cloneElement(trigger, { ref: triggerRef })}
      {isActive &&
        createPortal(
          <div
            ref={tooltipRef}
            className={wrapperClasses}
            style={{
              left: getTooltipPos?.left,
              top: getTooltipPos?.top,
              width: width,
              flexDirection: getTooltipPos?.openBelow
                ? 'column-reverse'
                : 'column',
            }}
            onWheel={deactivate}
            onTouchMove={deactivate}
          >
            <div
              className="Tooltip__content"
              style={{
                left: getTooltipPos?.offset,
              }}
            >
              <p>{tooltipContent}</p>
            </div>
            <div
              className="Tooltip__arrow"
              style={{
                transform: getTooltipPos?.openBelow ? 'scaleY(-1)' : undefined,
              }}
            />
          </div>,
          document.body,
        )}
    </>
  )
}
