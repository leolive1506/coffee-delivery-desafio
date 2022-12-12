import { SelectButton as SelectButtonStyle } from './styles'
import { ReactNode, HTMLProps } from 'react'

interface SelectButtonProps extends HTMLProps<HTMLButtonElement> {
  isActive?: boolean
  icon: ReactNode
  title: string
}

export function SelectButton({
  isActive = false,
  icon,
  title,
  ...rest
}: SelectButtonProps) {
  return (
    <SelectButtonStyle isActive={isActive} {...rest} type="button">
      {icon}
      <span>{title}</span>
    </SelectButtonStyle>
  )
}
