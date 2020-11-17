import { Box } from 'atomic-layout'
import { BoxProps } from '@atomic-layout/core'
import styled from 'styled-components'

interface Props extends BoxProps {
  spacing?: number
}

const applyItemStyle = ({ spacing = 0, flexDirection = 'row' }: Props) => {
  if (flexDirection?.includes('column')) {
    return `
      ${spacing ? `margin-bottom: ${spacing}rem;` : ''}
  `
  }

  return `
    ${spacing ? `margin-right: ${spacing}rem;` : ''}
  `
}

export const StyledFlex = styled(Box)<Props>`
  display: flex;
  > * {
    ${applyItemStyle}
  }
  > :last-child {
    margin: 0;
  }
`
