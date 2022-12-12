import { ReactElement } from 'react'
import { defaultTheme } from '../../styles/themes/default'
import { Container } from './styles'

interface IconRoundedProps {
  icon: ReactElement
  backgroundIcon: keyof typeof defaultTheme
}

export function IconRounded({ icon, backgroundIcon }: IconRoundedProps) {
  return <Container backgroundIcon={backgroundIcon}>{icon}</Container>
}
