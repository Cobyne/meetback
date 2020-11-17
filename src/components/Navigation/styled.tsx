import styled from 'styled-components'
import { Spacing } from 'constants/@typings'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${({ theme }) => `${theme.layout.navigationHeight}px`};;
  background-color: ${({ theme }) => theme.surface[1]}};
  padding: ${Spacing.M}rem
`

export const NavItem = styled.div`
  margin: ${Spacing.M}rem 0 0 ${Spacing.M}rem;

  &:first-child {
    margin-left: ${Spacing.M}rem;
  }
`
