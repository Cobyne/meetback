import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { roundness } from 'constants/@typings'

export const Surface = styled(Box)<{ elevation?: 1 | 2 }>`
  > * {
    border-radius: ${roundness}px;
    background-color: ${({ elevation = 1, theme }) => {
      return theme.surface[elevation]
    }};
  }
`
