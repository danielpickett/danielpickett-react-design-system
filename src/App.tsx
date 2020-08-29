import React, { useState } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.scss'
import {
  HorizontalRule,
  GridContainer,
  FlexContainer,
  Text,
  TextArea,
} from 'components'
import {
  ButtonsShowcase,
  RadioButtonsShowcase,
  CheckboxShowcase,
  NumberInputShowcase,
  LayoutComponentShowcase,
  SelectShowcase,
  TextShowcase,
  LabeledValueShowcase,
  TooltipShowcase,
  ColorShowcase,
  ModalShowcase,
} from './showcases'

export const App = () => {
  const [textAreaValue, setTextAreaValue] = useState<string | undefined>(
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, tempora! '.repeat(
      10,
    ),
  )
  const handleChange = (value: string) => {
    console.log(value)
    setTextAreaValue(value)
  }

  const showcases = [
    { label: 'Tooltip', route: '/Tooltip', component: TooltipShowcase },
    { label: 'Color', route: '/Color', component: ColorShowcase },
    { label: 'Buttons', route: '/Buttons', component: ButtonsShowcase },
    {
      label: 'RadioButtons',
      route: '/RadioButtons',
      component: RadioButtonsShowcase,
    },
    { label: 'Checkbox', route: '/Checkbox', component: CheckboxShowcase },
    {
      label: 'NumberInput',
      route: '/NumberInput',
      component: NumberInputShowcase,
    },
    {
      label: 'LabeledValue',
      route: '/LabeledValue',
      component: LabeledValueShowcase,
    },
    { label: 'Text', route: '/Text', component: TextShowcase },
    {
      label: 'LayoutComponent',
      route: '/LayoutComponent',
      component: LayoutComponentShowcase,
    },
    { label: 'Select', route: '/Select', component: SelectShowcase },
    { label: 'Modal', route: '/Modal', component: ModalShowcase },
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__nav">
          {showcases.map((showcase) => (
            <Link className="App__nav-link" to={showcase.route}>
              {showcase.label}
            </Link>
          ))}
        </div>
        <div className="App__showcases">
          <Route exact path="/" render={() => <p>Welcome!</p>} />
          {showcases.map((showcase) => (
            <Route exact path={showcase.route} component={showcase.component} />
          ))}
        </div>
      </div>
    </BrowserRouter>
  )
}
