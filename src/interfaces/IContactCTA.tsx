import { ReactElement } from 'react'

export interface IContactCTA {
  tooltipLabel?: string
  leftIcon?: ReactElement
  onClick?: () => void
  children?: ReactElement
  bgColor?: string
}
