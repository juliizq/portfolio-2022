import { ReactElement, ReactNode } from 'react'

export interface IButton {
  child?: string
  type?: 'button' | 'submit' | 'reset'
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  size?: string
  className?: string
  position?: React.CSSProperties
}
