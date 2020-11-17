import * as React from 'react'

import { NavItem, Wrapper } from './styled'

export interface ItemConfig {
  text: string
  onClick: () => void
}

export interface NavigationProps {
  items?: ItemConfig[]
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => (
  <Wrapper>
    {items?.map(({ onClick, text }, index) => (
      <NavItem key={index}>
        <span onClick={onClick}>{text}</span>
      </NavItem>
    ))}
  </Wrapper>
)
