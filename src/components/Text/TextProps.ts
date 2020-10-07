import { CSSProperties, ReactNode } from 'react'

interface CommonTextProps {
  children?: ReactNode
  size?: 'xxxl' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: 'normal' | 'bold' | 'light'
  UNSAFE_style?: CSSProperties
  UNSAFE_className?: string
  subdued?: boolean
  dangerouslySubdued?: boolean
}

// interface OnWhiteSubdued {
//   on: 'white'
//   color: undefined

// }
interface OnWhite {
  on: 'white'
  color?:
    | 'danger'
    | 'danger--dangerously-subdued'
    | 'grey'
    | 'grey--dangerously-subdued'
    | 'grey--subdued'
    | 'primary'
    | 'primary--dangerously-subdued'
    | 'success'
    | 'success--dangerously-subdued'
    | 'warning'
    | 'warning--dangerously-subdued'
}

interface OnGrey050 {
  on: 'grey-050'
  color?:
    | 'danger'
    | 'danger--dangerously-subdued'
    | 'grey'
    | 'grey--dangerously-subdued'
    | 'grey--subdued'
    | 'primary'
    | 'primary--dangerously-subdued'
    | 'success'
    | 'success--dangerously-subdued'
    | 'warning'
    | 'warning--dangerously-subdued'
}

interface OnGrey100 {
  on: 'grey-100'
  color?:
    | 'danger'
    | 'danger--dangerously-subdued'
    | 'grey'
    | 'grey--dangerously-subdued'
    | 'primary'
    | 'primary--dangerously-subdued'
    | 'success'
    | 'success--dangerously-subdued'
    | 'warning'
    | 'warning--dangerously-subdued'
}

interface OnGrey200 {
  on: 'grey-200'
  color?:
    | 'danger'
    | 'danger--dangerously-subdued'
    | 'grey'
    | 'grey--dangerously-subdued'
    | 'primary'
    | 'primary--dangerously-subdued'
    | 'success'
    | 'success--dangerously-subdued'
    | 'warning'
    | 'warning--dangerously-subdued'
}

interface OnGrey300 {
  on: 'grey-300'
  color?: 'grey' | 'grey--dangerously-subdued'
}

interface OnGrey400 {
  on: 'grey-400'
  color?: 'grey' | 'grey--dangerously-subdued'
}

interface OnGrey500 {
  on: 'grey-500'
  color?: 'grey' | 'grey--dangerously-subdued'
}

interface OnGrey600 {
  on: 'grey-600'
  color?: 'grey' | 'grey--dangerously-subdued' | 'grey--subdued'
}

interface OnGrey700 {
  on: 'grey-700'
  color?:
    | 'danger'
    | 'danger--dangerously-subdued'
    | 'grey'
    | 'grey--dangerously-subdued'
    | 'grey--subdued'
    | 'primary'
    | 'primary--dangerously-subdued'
    | 'success'
    | 'success--dangerously-subdued'
    | 'warning'
    | 'warning--dangerously-subdued'
}

interface OnGrey800 {
  on: 'grey-800'
  color?:
    | 'danger'
    | 'danger--dangerously-subdued'
    | 'grey'
    | 'grey--dangerously-subdued'
    | 'grey--subdued'
    | 'primary'
    | 'primary--dangerously-subdued'
    | 'success'
    | 'success--dangerously-subdued'
    | 'warning'
    | 'warning--dangerously-subdued'
}

interface OnGrey900 {
  on: 'grey-900'
  color?:
    | 'danger'
    | 'danger--dangerously-subdued'
    | 'danger--subdued'
    | 'grey'
    | 'grey--dangerously-subdued'
    | 'grey--subdued'
    | 'primary'
    | 'primary--dangerously-subdued'
    | 'primary--subdued'
    | 'success'
    | 'success--dangerously-subdued'
    | 'success--subdued'
    | 'warning'
    | 'warning--dangerously-subdued'
    | 'warning--subdued'
}

interface OnDanger050 {
  on: 'danger-050'
  color?: 'danger' | 'danger--dangerously-subdued'
}

interface OnDanger100 {
  on: 'danger-100'
  color?: 'danger' | 'danger--dangerously-subdued'
}

interface OnDanger200 {
  on: 'danger-200'
  color?: 'danger'
}

interface OnDanger500 {
  on: 'danger-500'
  color?: 'danger' | 'danger--dangerously-subdued'
}

interface OnDanger600 {
  on: 'danger-600'
  color?: 'danger' | 'danger--dangerously-subdued'
}

interface OnDanger700 {
  on: 'danger-700'
  color?: 'danger' | 'danger--dangerously-subdued' | 'danger--subdued'
}

interface OnDanger800 {
  on: 'danger-800'
  color?: 'danger' | 'danger--dangerously-subdued' | 'danger--subdued'
}

interface OnDanger900 {
  on: 'danger-900'
  color?: 'danger' | 'danger--dangerously-subdued' | 'danger--subdued'
}

interface OnPrimary050 {
  on: 'primary-050'
  color?: 'primary' | 'primary--dangerously-subdued'
}

interface OnPrimary100 {
  on: 'primary-100'
  color?: 'primary' | 'primary--dangerously-subdued'
}

interface OnPrimary200 {
  on: 'primary-200'
  color?: 'primary'
}

interface OnPrimary500 {
  on: 'primary-500'
  color?: 'primary' | 'primary--dangerously-subdued'
}

interface OnPrimary600 {
  on: 'primary-600'
  color?: 'primary' | 'primary--dangerously-subdued'
}

interface OnPrimary700 {
  on: 'primary-700'
  color?: 'primary' | 'primary--dangerously-subdued' | 'primary--subdued'
}

interface OnPrimary800 {
  on: 'primary-800'
  color?: 'primary' | 'primary--dangerously-subdued' | 'primary--subdued'
}

interface OnPrimary900 {
  on: 'primary-900'
  color?: 'primary' | 'primary--dangerously-subdued' | 'primary--subdued'
}

interface OnSuccess050 {
  on: 'success-050'
  color?: 'success' | 'success--dangerously-subdued'
}

interface OnSuccess100 {
  on: 'success-100'
  color?: 'success' | 'success--dangerously-subdued'
}

interface OnSuccess200 {
  on: 'success-200'
  color?: 'success'
}

interface OnSuccess500 {
  on: 'success-500'
  color?: 'success' | 'success--dangerously-subdued'
}

interface OnSuccess600 {
  on: 'success-600'
  color?: 'success' | 'success--dangerously-subdued'
}

interface OnSuccess700 {
  on: 'success-700'
  color?: 'success' | 'success--dangerously-subdued' | 'success--subdued'
}

interface OnSuccess800 {
  on: 'success-800'
  color?: 'success' | 'success--dangerously-subdued' | 'success--subdued'
}

interface OnSuccess900 {
  on: 'success-900'
  color?: 'success' | 'success--dangerously-subdued' | 'success--subdued'
}

interface OnWarning050 {
  on: 'warning-050'
  color?: 'warning' | 'warning--dangerously-subdued'
}

interface OnWarning100 {
  on: 'warning-100'
  color?: 'warning' | 'warning--dangerously-subdued'
}

interface OnWarning200 {
  on: 'warning-200'
  color?: 'warning'
}

interface OnWarning500 {
  on: 'warning-500'
  color?: 'warning' | 'warning--dangerously-subdued'
}

interface OnWarning600 {
  on: 'warning-600'
  color?: 'warning' | 'warning--dangerously-subdued'
}

interface OnWarning700 {
  on: 'warning-700'
  color?: 'warning' | 'warning--dangerously-subdued' | 'warning--subdued'
}

interface OnWarning800 {
  on: 'warning-800'
  color?: 'warning' | 'warning--dangerously-subdued' | 'warning--subdued'
}

interface OnWarning900 {
  on: 'warning-900'
  color?: 'warning' | 'warning--dangerously-subdued' | 'warning--subdued'
}

export type TextPropsType = CommonTextProps &
  (
    | OnDanger050
    | OnDanger100
    | OnDanger200
    | OnDanger500
    | OnDanger600
    | OnDanger700
    | OnDanger800
    | OnDanger900
    | OnGrey050
    | OnGrey100
    | OnGrey200
    | OnGrey300
    | OnGrey400
    | OnGrey500
    | OnGrey600
    | OnGrey700
    | OnGrey800
    | OnGrey900
    | OnPrimary050
    | OnPrimary100
    | OnPrimary200
    | OnPrimary500
    | OnPrimary600
    | OnPrimary700
    | OnPrimary800
    | OnPrimary900
    | OnSuccess050
    | OnSuccess100
    | OnSuccess200
    | OnSuccess500
    | OnSuccess600
    | OnSuccess700
    | OnSuccess800
    | OnSuccess900
    | OnWarning050
    | OnWarning100
    | OnWarning200
    | OnWarning500
    | OnWarning600
    | OnWarning700
    | OnWarning800
    | OnWarning900
    | OnWhite
  )
