import { SelectButton as SelectButtonStyle } from './styles'
import { ReactNode } from 'react'

interface SelectButtonProps {
  isActive?: boolean
  icon: ReactNode
  title: string
}

export function SelectButton({
  isActive = false,
  icon,
  title,
}: SelectButtonProps) {
  return (
    <SelectButtonStyle isActive={isActive}>
      {icon}
      <span>{title}</span>
    </SelectButtonStyle>
  )
}
