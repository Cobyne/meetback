import * as React from 'react'
import { Content, Wrapper } from './styled'
import Flex from '../Flex'

export interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Flex justify="center" alignItems="center" style={{ position: 'relative' }}>
      <Wrapper>
        <Content>
          <React.Suspense fallback={null}>{children}</React.Suspense>
        </Content>
      </Wrapper>
    </Flex>
  )
}

export default Main
