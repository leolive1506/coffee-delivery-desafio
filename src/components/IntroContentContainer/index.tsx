import { ReactNode } from 'react'
import { defaultTheme } from '../../styles/themes/default'
import { Container } from './styles'

interface IntroContentContainerProps {
  children: ReactNode
  svgColor: keyof typeof defaultTheme
}

export function IntroContentContainer({
  children,
  svgColor,
}: IntroContentContainerProps) {
  return <Container svgColor={svgColor}>{children}</Container>
}
