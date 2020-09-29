import React from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import './App.scss'

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

import { ColorsByTheNumbers } from 'experiments'

export const App = () => {
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
          <div className="App__nav-group">
            <NavLink
              className="App__nav-link"
              activeClassName="App__nav-link--active"
              exact
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="App__nav-group">
            {showcases.map((showcase, index) => (
              <NavLink
                key={index}
                className="App__nav-link"
                activeClassName="App__nav-link--active"
                to={showcase.route}
              >
                {showcase.label}
              </NavLink>
            ))}
          </div>
          <div className="App__nav-group">
            <NavLink className="App__nav-link" to="/all-components">
              All components
            </NavLink>
          </div>
        </div>
        <div className="App__showcases">
          <Route exact path="/" render={() => <p>Welcome!</p>} />
          {showcases.map((showcase, index) => (
            <Route
              key={index}
              exact
              path={showcase.route}
              component={showcase.component}
            />
          ))}
          <Route
            exact
            path="/all-components"
            render={() => (
              <>
                {showcases.map(({ component: Component }) => (
                  <div className="App__section">
                    <Component />
                  </div>
                ))}
              </>
            )}
          />
          <Route exact path="/ColorsByTheNumbers" component={ColorsByTheNumbers} />
        </div>
      </div>
    </BrowserRouter>
  )
}
