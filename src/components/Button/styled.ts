import { ColorTint, ColorType, Spacing } from 'constants/@typings'
import styled, { DefaultTheme } from 'styled-components'
import React from 'react'

export const getColor = (theme: DefaultTheme, color = ColorType.PRIMARY, tint = ColorTint.DEFAULT): string => {
  const { statusColors } = theme
  return statusColors[color][tint]
}

const getTextColor = (theme: DefaultTheme, tint = ColorTint.DEFAULT) => {
  return tint === ColorTint.LIGHT ? theme.lightText : theme.primaryText
}

export interface StyledButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isGhost?: boolean
  color?: ColorType
  tint?: ColorTint
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  transition: 0.2s linear;
  background-color: ${({ theme, color, tint, disabled }) => (disabled ? theme.disabled : getColor(theme, color, tint))};
  color: ${({ theme, tint, disabled }) => (disabled ? theme.disabledText : getTextColor(theme, tint))};
  padding: ${Spacing.S}rem;
  font-size: ${Spacing.M}rem;
  padding-left: ${Spacing.M}rem;
  padding-right: ${Spacing.M}rem;
  border: none;
  cursor: pointer;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    border-color: ${({ theme, color, disabled }) => !disabled && getColor(theme, color, ColorTint.DARK)};
  }
`
