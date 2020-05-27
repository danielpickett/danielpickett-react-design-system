import React, { useState } from 'react'
import { Tooltip, Button } from 'components'

export const TooltipShowcase = () => {
  const [tooltip1Active, setTooltip1Active] = useState(false)
  const [tooltip2Active, setTooltip2Active] = useState(false)
  const scrollerStyles = {
    width: '20rem',
    height: '50rem',
    overflow: 'auto',
    border: 'var(--border-width-default) solid var(--color-primary)',
    padding: '1rem',
    margin: '3rem',
  }
  return (
    <div
      className="TooltipShowcase"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div style={scrollerStyles}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis error cumque nihil corporis impedit distinctio deleniti, nesciunt
          ipsam iste quam pariatur veniam amet laborum temporibus alias
          consequatur, ipsum, expedita necessitatibus ex tempora molestiae!
          Architecto laudantium vel ipsam.
        </p>
        <Tooltip
          isActive={tooltip1Active}
          deactivate={() => setTooltip1Active(false)}
          width="556px"
          closeOnClickOutside
          trigger={
            <button
              onMouseMove={() => setTooltip1Active(true)}
              style={{
                display: 'block',
                backgroundColor: 'blue',
                color: 'white',
                padding: '4rem 2rem',
              }}
            >
              Clicky Clicky!
            </button>
          }
          tooltipContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis error cumque nihil corporis impedit distinctio deleniti, nesciunt
          ipsam iste quam pariatur veniam amet laborum temporibus alias"
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis error cumque nihil corporis impedit distinctio deleniti, nesciunt
          ipsam iste quam pariatur veniam amet laborum temporibus alias
          consequatur, ipsum, expedita necessitatibus ex tempora molestiae!
          Architecto laudantium vel ipsam reprehenderit eum veniam debitis
          sapiente natus, repellendus voluptas aut, nesciunt cupiditate tempora
          adipisci consectetur numquam. Sed molestias modi error eligendi
          explicabo autem ab ex nulla. Sed pariatur nemo repudiandae unde sit
          laborum, qui dignissimos, assumenda ipsam dolore vitae fugit similique
          ab quos inventore molestiae maiores, odio eaque possimus optio
          expedita corrupti! Necessitatibus architecto explicabo molestiae
          adipisci tenetur a cupiditate nihil! Voluptatibus, sequi.
        </p>
      </div>
      <div style={{ ...scrollerStyles, marginLeft: 'auto' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis error cumque nihil corporis impedit distinctio deleniti, nesciunt
          ipsam iste quam pariatur veniam amet laborum temporibus alias
          consequatur, ipsum, expedita necessitatibus ex tempora molestiae!
          Architecto laudantium vel ipsam.
        </p>
        <Tooltip
          isActive={tooltip2Active}
          deactivate={() => setTooltip2Active(false)}
          width="700px"
          trigger={
            <Button onClick={() => setTooltip2Active(!tooltip2Active)}>
              Clicky Clicky!
            </Button>
          }
          tooltipContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis error cumque nihil corporis impedit distinctio deleniti, nesciunt
          ipsam iste quam pariatur veniam amet laborum temporibus alias"
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quis error cumque nihil corporis impedit distinctio deleniti, nesciunt
          ipsam iste quam pariatur veniam amet laborum temporibus alias
          consequatur, ipsum, expedita necessitatibus ex tempora molestiae!
          Architecto laudantium vel ipsam reprehenderit eum veniam debitis
          sapiente natus, repellendus voluptas aut, nesciunt cupiditate tempora
          adipisci consectetur numquam. Sed molestias modi error eligendi
          explicabo autem ab ex nulla. Sed pariatur nemo repudiandae unde sit
          laborum, qui dignissimos, assumenda ipsam dolore vitae fugit similique
          ab quos inventore molestiae maiores, odio eaque possimus optio
          expedita corrupti! Necessitatibus architecto explicabo molestiae
          adipisci tenetur a cupiditate nihil! Voluptatibus, sequi.
        </p>
      </div>
    </div>
  )
}
