import * as React from 'react'
import { StyledFlex } from './styled'
import { Box } from 'atomic-layout'
import { BoxProps } from '@atomic-layout/core'

interface Props extends BoxProps {
  gap?: number
}

const Flex = React.forwardRef<HTMLElement, Props>(({ gap, children, ...restProps }, ref) => {
  return (
    <Box {...restProps} as={StyledFlex} spacing={gap} ref={ref}>
      {children}
    </Box>
  )
})

export default Flex
