import * as React from 'react'

import { StyledButton, StyledButtonProps } from './styled'

export interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Button: React.FC<ButtonProps> = ({ ref, as, children, type = 'button', ...rest }) => {
  return (
    <StyledButton {...rest}>
      <span>{children}</span>
    </StyledButton>
  )
}
