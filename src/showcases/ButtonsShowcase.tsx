import React, { useState } from 'react'
import { Button, Text, Checkbox, ButtonGroup } from '../components'
import { Calendar, Camera, Edit } from 'react-feather'

export const ButtonsShowcase = () => {
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <Checkbox
        checked={disabled}
        onChange={(checked) => {
          setDisabled(checked)
        }}
        label="Disable all buttons"
      />
      <div
        className="ButtonsShowcase"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(10, max-content)',
          gap: '1rem',
          justifyItems: 'start',
        }}
      >
        <Text>Small</Text>
        <Button disabled={disabled} size="small">
          Default
        </Button>
        <Button disabled={disabled} size="small" kind="primary">
          Primary
        </Button>
        <Button disabled={disabled} size="small" kind="danger">
          Danger
        </Button>
        <Button disabled={disabled} size="small" IconLeft={Camera}>
          Icon Left
        </Button>
        <Button disabled={disabled} size="small" IconRight={Calendar}>
          Icon Right
        </Button>
        <Button disabled={disabled} size="small" rounded>
          Rounded
        </Button>
        <Button disabled={disabled} size="small" kind="text">
          text
        </Button>
        <Button
          disabled={disabled}
          size="small"
          kind="text"
          rounded
          IconLeft={Edit}
        >
          text
        </Button>
        <Button
          disabled={disabled}
          size="small"
          kind="text"
          rounded
          IconLeft={Edit}
        />

        <Text>Medium</Text>
        <Button disabled={disabled}>Default</Button>
        <Button disabled={disabled} kind="primary">
          Primary
        </Button>
        <Button disabled={disabled} kind="danger">
          Danger
        </Button>
        <Button disabled={disabled} IconLeft={Camera}>
          Icon Left
        </Button>
        <Button disabled={disabled} IconRight={Calendar}>
          Icon Right
        </Button>
        <Button disabled={disabled} rounded>
          Rounded
        </Button>
        <Button disabled={disabled} kind="text">
          text
        </Button>
        <Button disabled={disabled} kind="text" rounded IconLeft={Edit}>
          text
        </Button>
        <Button disabled={disabled} kind="text" rounded IconLeft={Edit} />

        <Text>Large</Text>
        <Button disabled={disabled} size="large">
          Default
        </Button>
        <Button disabled={disabled} size="large" kind="primary">
          Primary
        </Button>
        <Button disabled={disabled} size="large" kind="danger">
          Danger
        </Button>
        <Button disabled={disabled} size="large" IconLeft={Camera}>
          Icon Left
        </Button>
        <Button disabled={disabled} size="large" IconRight={Calendar}>
          Icon Right
        </Button>
        <Button disabled={disabled} size="large" rounded>
          Rounded
        </Button>
        <Button disabled={disabled} size="large" kind="text">
          text
        </Button>
        <Button
          disabled={disabled}
          size="large"
          kind="text"
          rounded
          IconLeft={Edit}
        >
          text
        </Button>
        <Button
          disabled={disabled}
          size="large"
          kind="text"
          rounded
          IconLeft={Edit}
        />

        <Text>Extra Large</Text>
        <Button disabled={disabled} size="extra-large">
          Default
        </Button>
        <Button disabled={disabled} size="extra-large" kind="primary">
          Primary
        </Button>
        <Button disabled={disabled} size="extra-large" kind="danger">
          Danger
        </Button>
        <Button disabled={disabled} size="extra-large" IconLeft={Camera}>
          Icon Left
        </Button>
        <Button disabled={disabled} size="extra-large" IconRight={Calendar}>
          Icon Right
        </Button>
        <Button disabled={disabled} size="extra-large" rounded>
          Rounded
        </Button>
        <Button disabled={disabled} size="extra-large" kind="text">
          text
        </Button>
        <Button
          disabled={disabled}
          size="extra-large"
          kind="text"
          rounded
          IconLeft={Edit}
        >
          text
        </Button>
        <Button
          disabled={disabled}
          size="extra-large"
          kind="text"
          rounded
          IconLeft={Edit}
        />

        <Text>Extra Large</Text>
        <Button disabled={disabled} size="extra-large">
          Default
        </Button>
        <Button disabled={disabled} size="extra-large" kind="primary">
          Primary
        </Button>
        <Button disabled={disabled} size="extra-large" kind="danger">
          Danger
        </Button>
        <Button disabled={disabled} size="extra-large" IconLeft={Camera}>
          Icon Left
        </Button>
        <Button disabled={disabled} size="extra-large" IconRight={Calendar}>
          Icon Right
        </Button>
        <Button disabled={disabled} size="extra-large" rounded>
          Rounded
        </Button>
        <Button disabled={disabled} size="extra-large" kind="text">
          text
        </Button>
        <Button
          disabled={disabled}
          size="extra-large"
          kind="text"
          rounded
          IconLeft={Edit}
        >
          text
        </Button>
        <Button
          disabled={disabled}
          size="extra-large"
          kind="text"
          rounded
          IconLeft={Edit}
        />
      </div>
      <div className="buttonGroupExamples">
        <ButtonGroup size="small">
          <Button>Click me!</Button>
          <Button>No, click me!</Button>
          <Button>Don't click me!</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Click me!</Button>
          <Button>No, click me!</Button>
          <Button>Don't click me!</Button>
        </ButtonGroup>
        <ButtonGroup  size="large">
          <Button>Click me!</Button>
          <Button>No, click me!</Button>
          <Button>Don't click me!</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
