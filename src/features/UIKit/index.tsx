import * as React from 'react'
import Main from 'components/Main'
import Flex from 'components/Flex'
import { Button } from 'components/Button'
import { Navigation } from 'components/Navigation'
import { Spacing } from 'constants/@typings'

const UIKit: React.FC = () => {
  return (
    <Main>
      <Navigation />
      <Flex flexDirection="column" gap={Spacing.XL}>
        <Flex>
          <h1>H1</h1>
        </Flex>
        <Flex>
          <h2>H2</h2>
        </Flex>
        <Flex>
          <h3>H3</h3>
        </Flex>
        <Flex>
          <h4>H4</h4>
        </Flex>
        <Flex>
          <h5>H5</h5>
        </Flex>
        <Flex>
          <Button>Hello button</Button>
        </Flex>
      </Flex>
    </Main>
  )
}

export default UIKit
