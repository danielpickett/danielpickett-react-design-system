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
import * as CSS from 'csstype'

export const Tooltip = ({
  trigger,
  tooltipContent,
  isActive,
  deactivate,
  closeOnClickOutside,
  closeOnScroll = true,
  width,
  className,
  style,
  pointerEvents = 'auto',
}: {
  trigger: ReactElement
  tooltipContent: ReactNode
  isActive: boolean
  deactivate: () => void
  closeOnClickOutside?: boolean
  closeOnScroll?: boolean
  width?: string
  className?: string
  style?: CSS.Properties
  pointerEvents?: 'none' | 'auto'
}) => {
  const [isScrolling, setIsScrolling] = useState(false)

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
    let scrollerTimeoutID: number

    if (closeOnScroll) {
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

        setIsScrolling(true)
        scrollerTimeoutID = window.setTimeout(() => {
          setIsScrolling(false)
        }, 500)
      }

      if (isActive) {
        getScrollParent(triggerElement, (node: Node) => {
          node.addEventListener('scroll', handleScroll)
        })
      } else {
        getScrollParent(triggerElement, (node: Node) => {
          window.clearTimeout(scrollerTimeoutID)
          node.removeEventListener('scroll', handleScroll)
        })
      }

      return () => {
        getScrollParent(triggerElement, (node: Node) => {
          window.clearTimeout(scrollerTimeoutID)
          node.removeEventListener('scroll', handleScroll)
        })
      }
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
        !isScrolling &&
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
              pointerEvents: pointerEvents,
            }}
            onWheel={closeOnScroll ? deactivate : undefined}
            onTouchMove={closeOnScroll ? deactivate : undefined}
          >
            <div
              className="Tooltip__content"
              style={{
                ...style,
                left: getTooltipPos?.offset,
              }}
            >
              {tooltipContent}
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
