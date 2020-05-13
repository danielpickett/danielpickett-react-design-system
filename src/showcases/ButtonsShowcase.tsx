import React from 'react'
import { Button, Text } from '../components'
import { Calendar, Camera, Edit } from 'react-feather'

export const ButtonsShowcase = () => {
  return (
    <div
      className="ButtonsShowcase"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, max-content)',
        gap: '1rem',
        justifyItems: 'start'
      }}
    >
      {/* <Text>Small</Text>
      <Button size="extra-small" >Default</Button>
      <Button size="extra-small" kind="primary">Primary</Button>
      <Button size="extra-small" kind="danger">Danger</Button>
      <Button size="extra-small" IconLeft={Camera}>Icon Left</Button>
      <Button size="extra-small" IconLeft={Calendar}>Icon Right</Button>
      <Button size="extra-small" rounded>Rounded</Button> */}

      <Text>Small</Text>
      <Button size="small" >Default</Button>
      <Button size="small" kind="primary">Primary</Button>
      <Button size="small" kind="danger">Danger</Button>
      <Button size="small" IconLeft={Camera}>Icon Left</Button>
      <Button size="small" IconRight={Calendar}>Icon Right</Button>
      <Button size="small" rounded>Rounded</Button>
      <Button size="small" kind="text" >text</Button>
      <Button size="small" kind="text" rounded IconLeft={Edit}>text</Button>
      <Button size="small" kind="text" rounded IconLeft={Edit}/>

      <Text>Medium</Text>
      <Button>Default</Button>
      <Button kind="primary">Primary</Button>
      <Button kind="danger">Danger</Button>
      <Button IconLeft={Camera}>Icon Left</Button>
      <Button IconRight={Calendar}>Icon Right</Button>
      <Button rounded>Rounded</Button>
      <Button kind="text" >text</Button>
      <Button kind="text" rounded IconLeft={Edit}>text</Button>
      <Button kind="text" rounded IconLeft={Edit}/>
      
      <Text>Large</Text>
      <Button size="large" >Default</Button>
      <Button size="large" kind="primary">Primary</Button>
      <Button size="large" kind="danger">Danger</Button>
      <Button size="large" IconLeft={Camera}>Icon Left</Button>
      <Button size="large" IconRight={Calendar}>Icon Right</Button>
      <Button size="large" rounded>Rounded</Button>
      <Button size="large" kind="text" >text</Button>
      <Button size="large" kind="text" rounded IconLeft={Edit}>text</Button>
      <Button size="large" kind="text" rounded IconLeft={Edit}/>
      
      <Text>Extra Large</Text>
      <Button size="extra-large">Default</Button>
      <Button size="extra-large" kind="primary">Primary</Button>
      <Button size="extra-large" kind="danger">Danger</Button>
      <Button size="extra-large" IconLeft={Camera}>Icon Left</Button>
      <Button size="extra-large" IconRight={Calendar}>Icon Right</Button>
      <Button size="extra-large" rounded>Rounded</Button>
      <Button size="extra-large" kind="text" >text</Button>
      <Button size="extra-large" kind="text" rounded IconLeft={Edit}>text</Button>
      <Button size="extra-large" kind="text" rounded IconLeft={Edit}/>
    </div>
  )
}
