// import { logOverflow } from './logOverflow'
import { repositionToTop } from './repositionToTop'

type Position = 'top' | 'right' | 'bottom' | 'left'

export const repositionTooltip = (
  triggerNode: HTMLElement | SVGElement | null,
  tooltipNode: HTMLDivElement | null,
  tooltipBodyNode: HTMLDivElement | null,
  tooltipArrowNode: HTMLDivElement | null,
  paddingInPixels: number,
  arrowSizeInRems: number,
) => {
  // console.log('resizing')
  if (triggerNode && tooltipNode && tooltipBodyNode && tooltipArrowNode) {
    const trigRect = triggerNode.getBoundingClientRect()
    const tipRect = tooltipNode.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const arrowSizeInPixels =
      arrowSizeInRems *
      parseFloat(getComputedStyle(document.documentElement).fontSize)

    const heightOfTipPlusArrow = tipRect.height + arrowSizeInPixels
    const widthOfTipPlusArrow = tipRect.width + arrowSizeInPixels

    const spaceAboveTrigger = Math.floor(trigRect.top - paddingInPixels)
    const spaceBelowTrigger = Math.floor(
      viewport.height - trigRect.bottom - paddingInPixels,
    )
    const spaceLeftOfTrigger = Math.floor(trigRect.left - paddingInPixels)
    const spaceRightOfTrigger = Math.floor(
      viewport.width - trigRect.right - paddingInPixels,
    )

    const willFitTop = heightOfTipPlusArrow < spaceAboveTrigger
    const willFitBottom = heightOfTipPlusArrow < spaceBelowTrigger
    const willFitLeft = widthOfTipPlusArrow < spaceLeftOfTrigger
    const willFitRight = widthOfTipPlusArrow < spaceRightOfTrigger

    console.log('willFitTop', willFitTop)
    console.log('willFitBottom', willFitBottom)
    console.log('willFitLeft', willFitLeft)
    console.log('willFitRight', willFitRight)

    repositionToTop(
      tooltipNode,
      tooltipBodyNode,
      tooltipArrowNode,
      paddingInPixels,
      arrowSizeInPixels,
      trigRect,
      tipRect,
    )
  }
}
