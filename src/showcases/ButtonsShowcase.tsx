import React from 'react'
import {Button } from '../components'

export const ButtonsShowcase = () => {
  return (
    <div className="ButtonsShowcase">
      <Button>Default</Button>
      <Button kind='primary'>Primary</Button>
      <Button kind='danger'>Danger</Button>
    </div>
  )
}