import React, { useState, Fragment } from 'react'
import { Button, TextOld, Checkbox, GridContainer } from '../components'
import { Camera, CheckCircle } from 'react-feather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

type ButtonSizeType = 'small' | 'medium' | 'large' | 'extra-large'
type ButtonPropsType = {
  children?: string
  kind?: 'default' | 'primary' | 'danger' | 'text'
  rounded?: boolean
  IconLeft?: JSX.Element
  IconRight?: JSX.Element
}[]

const BellIcon = () => <FontAwesomeIcon icon={faBell} />

export const ButtonsShowcase = () => {
  const [disabled, setDisabled] = useState(false)

  const buttonSizes: ButtonSizeType[] = [
    'small',
    'medium',
    'large',
    'extra-large',
  ]

  const buttonsProps: ButtonPropsType = [
    {
      children: 'Click me',
    },
    {
      children: 'Click me',
      kind: 'primary',
    },
    {
      children: 'Click me',
      kind: 'danger',
    },
    {
      children: 'Click me',
      kind: 'text',
    },
    {
      children: 'Click me',
      IconLeft: <Camera />,
    },
    {
      children: 'Click me',
      IconRight: <BellIcon />,
    },
    {
      children: 'Click me',
      IconLeft: <CheckCircle />,
      IconRight: <CheckCircle />,
    },
    {
      children: undefined,
      IconRight: <CheckCircle />,
    },
    {
      children: undefined,
      kind: 'text',
      IconRight: <CheckCircle />,
    },
  ]

  return (
    <div className="ButtonsShowcase">
      <div style={{ marginBottom: '1rem' }}>
        <Checkbox
          checked={disabled}
          onChange={(checked) => {
            setDisabled(checked)
          }}
          label="Disable all buttons"
        />
      </div>
      <div>
        <GridContainer
          columns={`repeat(${buttonsProps.length + 1}, max-content)`}
          justify="start"
          gap="1rem"
        >
          <div />
          {buttonsProps.map((buttonProps, index) => (
            <TextOld size="extra-small" key={index}>
              kind: {buttonProps.kind || 'default'}
            </TextOld>
          ))}
          {buttonSizes.map((buttonSize, index) => {
            return (
              <Fragment key={index}>
                <TextOld size="extra-small">size: {buttonSize}</TextOld>
                {buttonsProps.map((buttonProps, index) => {
                  return (
                    <Fragment key={index}>
                      <Button {...buttonProps} size={buttonSize} />
                    </Fragment>
                  )
                })}
              </Fragment>
            )
          })}
        </GridContainer>
      </div>
    </div>
  )
}
