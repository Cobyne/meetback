import { substitute } from '.'

describe('substitute', () => {
  it('substitutes all given values', () => {
    const data = {
      userId: '1234',
      comment: '1234',
    }

    const result = substitute('/:userId/:comment', data)
    expect(result).toBe('/1234/1234')
  })

  it('doesnt substitute when key is not found in input string', () => {
    const data = {
      userId: '1234',
      comment: '1234',
    }

    const result = substitute('/:postId/:comment', data)
    expect(result).toBe('/:postId/1234')
  })
})
